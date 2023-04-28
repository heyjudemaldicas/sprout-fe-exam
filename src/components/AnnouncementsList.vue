<template>
  <div class="announcements-list-container">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="col-md-1">TITLE</th>
            <th class="col-md-2">MESSAGE</th>
            <th class="col-md-1">SENT BY</th>
            <th class="col-md-1">
              SENT THROUGH
              <font-awesome-icon
                class="fa-icon info"
                icon="circle-info"
              ></font-awesome-icon>
            </th>
            <th class="col-md-1">DATE CREATED</th>
            <th class="col-md-1">START DATE</th>
            <th class="col-md-1">END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredAnnouncements" :key="item.id">
            <td class="col-md-1 message">{{ item.title }}</td>
            <td class="col-md-2 message">{{ item.message }}</td>
            <td class="col-md-1">{{ item.sender }}</td>
            <td class="col-md-1">
              <span v-for="mode in item.sentThrough" :key="mode">
                <font-awesome-icon
                  v-if="mode == 1"
                  class="fa-icon"
                  icon="bookmark"
                ></font-awesome-icon>
                <font-awesome-icon
                  v-if="mode == 2"
                  class="fa-icon"
                  icon="mobile-screen-button"
                ></font-awesome-icon>
              </span>
            </td>
            <td class="col-md-1">{{ item.dateCreated }}</td>
            <td class="col-md-1">
              <span>{{ item.startDate }}</span>
              <br />
              <span class="time">{{ item.startTIme }}</span>
            </td>
            <td class="col-md-1">
              <span>{{ item.endDate }}</span>
              <br />
              <span class="time">{{ item.endTime }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination d-flex align-items-center px-3 my-2">
        <div class="page-item items-per-page d-flex align-items-center">
          <span>Items per page</span>
          <select
            class="form-select"
            aria-label="Filter by"
            v-model="itemsPerPage"
          >
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div class="page-item paginate-buttons">
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="backward-step"
            @click="prevPage"
          ></font-awesome-icon>
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="caret-left"
            @click="prevPage"
          ></font-awesome-icon>
          <span>Page {{ current }} of {{ length }}</span>
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="caret-right"
            @click="nextPage"
          ></font-awesome-icon>
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="forward-step"
            @click="nextPage"
          ></font-awesome-icon>
        </div>
        <div class="page-item show-count">
          Showing {{ start }}-{{
            end > announcements.length ? announcements.length : end
          }}
          of {{ announcements.length }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mockAnnouncements from "../../tests/mocks/mock-announcements.json";
import moment from "moment";

export default {
  name: "AnnouncementsList",
  data() {
    return {
      announcements: [],
      filteredAnnouncements: [],
      current: 1,
      itemsPerPage: 10,
      start: 0,
      end: 10,
      length: 0,
    };
  },
  mounted() {
    this.getAnnouncements();
    this.paginate();
  },
  methods: {
    getAnnouncements() {
      // Map data to announcements
      mockAnnouncements.map((announcement) => {
        this.announcements.push({
          id: announcement.id,
          title: announcement.title,
          message: announcement.message,
          sender: `${announcement.sender
            .split(" ")
            .slice(-1)
            .join(" ")}, ${announcement.sender
            .split(" ")
            .slice(0, -1)
            .join(" ")}`,
          sentThrough: announcement.sent_through,
          dateCreated: moment(announcement.date_created).format("MM/DD/YYYY"),
          startDate: moment(announcement.announcement_start_date).format(
            "MM/DD/YYYY"
          ),
          startTIme: moment(announcement.announcement_start_date).format(
            "hh:mm A"
          ),
          endDate: moment(announcement.announcement_end_date).format(
            "MM/DD/YYYY"
          ),
          endTime: moment(announcement.announcement_end_date).format("hh:mm A"),
        });
      });
    },
    paginate() {
      let limit = +this.itemsPerPage;
      let start = (this.current - 1) * limit;
      let end = start + limit;
      this.start = start + 1;
      this.end = end;

      this.filteredAnnouncements = this.announcements?.slice(start, end);
      this.length = Math.ceil(this.announcements.length / limit);
    },
    nextPage() {
      this.length !== this.current ? this.current++ : this.current;
    },
    prevPage() {
      this.current !== 1 ? this.current-- : this.current;
    },
  },
  watch: {
    itemsPerPage() {
      this.current = 1;
      this.paginate();
    },
    current() {
      this.paginate();
    },
  },
};
</script>
<style lang="scss" scoped>
.announcements-list-container {
  .table-responsive {
    border: 1px solid #ddd;
    border-radius: 8px;

    table {
      font-size: 14px;

      thead {
        font-size: 12px;

        tr {
          th {
            .info {
              margin-left: 4px;
              color: #146ebe;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            vertical-align: middle;

            &.message {
              max-width: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            span.time {
              font-size: 12px;
              color: #999;
            }

            span > .fa-icon {
              margin-right: 8px;
            }
          }
        }
      }
    }

    .pagination {
      font-size: 14px;

      .page-item {
        flex: 1;
      }

      .item-per-page {
        display: flex;
        justify-content: flex-start;
      }

      .form-select {
        margin-left: 16px;
        height: auto;
        font-size: 14px;
        width: auto;
      }

      .paginate-buttons {
        display: flex;
        justify-content: center;

        .fa-icon {
          margin: 0 8px;
        }
      }

      .show-count {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

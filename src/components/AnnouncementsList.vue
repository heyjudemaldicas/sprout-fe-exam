<template>
  <AnnouncementsFilter @search="search" :announcementType="announcementType" />
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
          Showing {{ announcementsData.length > 0 ? start : 0 }}-{{
            end > announcementsData.length ? announcementsData.length : end
          }}
          of {{ announcementsData.length }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnnouncementsFilter from "@/components/AnnouncementsFilter.vue";
export default {
  name: "AnnouncementsList",
  components: {
    AnnouncementsFilter,
  },
  data() {
    return {
      announcementsData: [],
      filteredAnnouncements: [],
      current: 1,
      itemsPerPage: 10,
      start: 0,
      end: 10,
      length: 0,
      draftsCount: 0,
      filterBy: 0,
      announcementType: [
        {
          text: "All",
          value: 0,
          count: 0,
        },
        {
          text: "Drafts",
          value: 1,
          count: 0,
        },
      ],
    };
  },
  props: ["announcements"],
  mounted() {
    this.announcementsData = this.announcements;
    this.setAnnouncementTypeCount();
    this.sort(1);
    this.paginate();
  },
  methods: {
    paginate() {
      let limit = +this.itemsPerPage;
      let start = (this.current - 1) * limit;
      let end = start + limit;
      this.start = start + 1;
      this.end = end;

      this.filteredAnnouncements = this.announcementsData?.slice(start, end);
      this.length = Math.ceil(this.announcementsData.length / limit);
    },
    nextPage() {
      this.length !== this.current ? this.current++ : this.current;
    },
    prevPage() {
      this.current !== 1 ? this.current-- : this.current;
    },
    search({ value, index, filterBy }) {
      this.current = 1;

      // Filter for All announcement type
      this.announcementsData = this.announcements.filter((announcement) => {
        return (
          announcement.title.toLowerCase().includes(value.toLowerCase()) ||
          announcement.message.toLowerCase().includes(value.toLowerCase()) ||
          announcement.sender.toLowerCase().includes(value.toLowerCase())
        );
      });
      this.setAnnouncementTypeCount();

      // Filter for Drafts type
      if (index == 1) {
        this.announcementsData = this.announcementsData.filter(
          (announcement) => announcement.messageType === index
        );
      }

      // Sort and paginate
      if (+filterBy > 0) {
        this.sort(+filterBy);
      }
      this.paginate();
    },
    setAnnouncementTypeCount() {
      this.announcementType.forEach((type) => {
        type.count =
          type.value === 0
            ? this.announcementsData.length
            : this.announcementsData.filter(
                (announcement) => announcement.messageType === type.value
              ).length;
      });
    },
    sort(filterBy) {
      if (filterBy === 1) { // Latest to oldest
        this.announcementsData = this.announcementsData.slice().sort(function (a, b) {
          return new Date(b.dateCreated) - new Date(a.dateCreated)
        });
      } else if (filterBy === 2) { // Oldest to latest
        this.announcementsData =  this.announcementsData.slice().sort(function (a, b) {
          return new Date(a.dateCreated) - new Date(b.dateCreated)
        });
      }
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
        align-items: center;

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

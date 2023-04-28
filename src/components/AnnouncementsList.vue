<template>
  <div class="announcements-list-container">
    <!-- <div class="header d-flex">
      <div class="title">TITLE</div>
      <div class="message">MESSAGE</div>
      <div class="sent-by">SENT BY</div>
      <div class="sent-through">SENT THROUGH</div>
      <div class="date-created">DATE CREATED</div>
      <div class="start-date">START DATE</div>
      <div class="end-date">END DATE</div>
    </div>
    <div class="list">
      <div class="title">ATTN: New employees</div>
      <div class="message">In line with the updacoming team buildiing activity...</div>
      <div class="sent-by">Roe, Ken</div>
      <div class="sent-through">Y</div>
      <div class="date-created">02/17/2023</div>
      <div class="start-date">02/17/2023</div>
      <div class="end-date">02/17/2023</div>
    </div>
    <div class="pagination"></div> -->

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="col-md-1">TITLE</th>
            <th class="col-md-2">MESSAGE</th>
            <th class="col-md-1">SENT BY</th>
            <th class="col-md-1">SENT THROUGH</th>
            <th class="col-md-1">DATE CREATED</th>
            <th class="col-md-1">START DATE</th>
            <th class="col-md-1">END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in announcements" :key="item.id">
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
      <div class="pagination">SSS</div>
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
    };
  },
  mounted() {
    this.getAnnouncements();
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
      }

      tbody {
        tr {
          td {
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
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
</style>

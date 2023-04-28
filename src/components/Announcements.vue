<template>
  <div class="announcements-container">
    <div
      class="announcement-header d-flex align-items-center justify-content-between"
    >
      <div class="label">
        <h4>Announcements</h4>
        <span
          >View, create, or edit announcements for all employees of your
          company.</span
        >
      </div>
      <div class="button-container">
        <button class="btn btn-success cursor-pointer" type="button">
          <font-awesome-icon class="fa-icon" icon="plus"></font-awesome-icon>
          Post an Announcement
        </button>
      </div>
    </div>
    <AnnouncementsList
      v-if="announcements.length > 0"
      :announcements="announcements"
    />
  </div>
</template>
<script>
import AnnouncementsList from "@/components/AnnouncementsList.vue";
import mockAnnouncements from "../../tests/mocks/mock-announcements.json";
import moment from "moment";

export default {
  name: "Announcements",
  components: {
    AnnouncementsList,
  },
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
          messageType: announcement.message_type,
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
.announcements-container {
  font-family: "Rubik", sans-serif;
  font-weight: normal;
  margin: 48px;

  .announcement-header {
    .label {
      span {
        font-size: 16px;
      }
    }
  }
}
</style>

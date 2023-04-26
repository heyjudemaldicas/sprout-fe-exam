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
    <AnnouncementsFilter />
    <AnnouncementsList />
  </div>
</template>
<script>
import AnnouncementsFilter from "@/components/AnnouncementsFilter.vue";
import AnnouncementsList from "@/components/AnnouncementsList.vue";

export default {
  name: "Announcements",
  components: {
    AnnouncementsList,
    AnnouncementsFilter,
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

    .button-container {
    }
  }
}
</style>

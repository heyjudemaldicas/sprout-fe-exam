<template>
  <div
    class="announcements-filter-container d-flex justify-content-between align-items-center my-3"
  >
    <div class="filter-selectors d-flex">
      <div class="filter all selected">
        <span class="px-2">10</span>
        All
      </div>
      <div class="filter drafts selected">
        <span class="px-2">10</span>
        Drafts
      </div>
    </div>
    <div class="filter-input d-flex w-50">
      <select class="form-select w-50" aria-label="Filter by">
        <option selected>Filter by</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="form-group d-flex flex-nowrap w-50">
        <input
          type="text"
          class="form-control"
          id="inputText"
          aria-describedby="search"
          placeholder="Search..."
        />
        <font-awesome-icon
          class="fa-icon cursor-pointer"
          icon="magnifying-glass"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnnouncementsFilter",
};
</script>
<style lang="scss" scoped>
.announcements-filter-container {
  .filter-selectors {
    .filter {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 8px;
      margin-right: 16px;

      span {
        color: #fff;
        padding: 2px 3px;
        font-size: 12px;
        border-radius: 8px;
      }

      &.all > span {
        background-color: green;
      }

      &.drafts > span {
        background-color: orange;
      }

      &.selected.all {
        background-color: rgba(0, 255, 0, 0.3);
      }

      &.selected.drafts {
        background-color: rgb(255, 165, 0, 0.3);
      }
    }
  }

  .filter-input {
    .form-select {
      margin-right: 16px;
    }

    .form-group {
      position: relative;

      .fa-icon {
        position: absolute;
        right: 0;
        bottom: 30%;
        margin-right: 8px;
      }
    }
  }
}
</style>

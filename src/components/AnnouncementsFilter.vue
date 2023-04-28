<template>
  <div
    class="announcements-filter-container d-flex justify-content-between align-items-center my-3"
  >
    <div class="filter-selectors d-flex">
      <template v-for="(type, index) in announcementType" :key="index">
        <div
          class="filter cursor-pointer"
          :class="{
            selected: index === selected,
            all: index === 0,
            drafts: index === 1,
          }"
          @click="
            selected = index;
            $emit('search', {
              value: searchText,
              index: selected,
              filterBy: filterBy,
            });
          "
        >
          <span class="px-2">{{ type.count }}</span>
          {{ type.text }}
        </div>
      </template>
    </div>
    <div class="filter-input d-flex w-50">
      <select
        class="form-select w-50"
        aria-label="Filter by"
        v-model="filterBy"
        @change="
          $emit('search', {
            value: searchText,
            index: selected,
            filterBy: filterBy,
          })
        "
      >
        <option value="1" selected>Filter by</option>
        <option value="1">Latest to Oldest</option>
        <option value="2">Oldest to Latest</option>
      </select>
      <div class="form-group d-flex flex-nowrap w-50">
        <input
          type="text"
          class="form-control"
          id="inputText"
          aria-describedby="search"
          placeholder="Search..."
          v-model="searchText"
          @input="
            $emit('search', {
              value: searchText,
              index: selected,
              filterBy: filterBy,
            })
          "
        />
        <font-awesome-icon
          class="fa-icon cursor-pointer"
          icon="magnifying-glass"
          @click="
            $emit('search', {
              value: searchText,
              index: selected,
              filterBy: filterBy,
            })
          "
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnnouncementsFilter",
  data() {
    return {
      selected: 0,
      searchText: "",
      filterBy: "1",
    };
  },
  props: ["announcementType"],
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

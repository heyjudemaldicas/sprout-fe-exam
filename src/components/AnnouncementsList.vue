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
            <th colspan="2">TITLE</th>
            <th colspan="2">MESSAGE</th>
            <th scope="col">SENT BY</th>
            <th scope="col">SENT THROUGH</th>
            <th scope="col">DATE CREATED</th>
            <th scope="col">START DATE</th>
            <th scope="col">END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">ATTN: New employees</td>
            <td colspan="2">
              In line with the updacoming team buildiing activity...
            </td>
            <td>Roe, Ken</td>
            <td>Y</td>
            <td>02/17/2023</td>
            <td>02/17/2023</td>
            <td>02/17/2023</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">SSS</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnnouncementsList",
};
</script>
<style lang="scss" scoped>
.announcements-list-container {
  .table-responsive {
    border: 1px solid #ddd;
    border-radius: 8px;

    table {
    }
  }
}
</style>

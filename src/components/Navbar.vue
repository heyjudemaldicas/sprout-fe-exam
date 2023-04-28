<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex">
      <a class="navbar-brand mr-auto" href="#">
        <img src="../assets/sprout-white.png" alt="Sprout Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Requests
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Team
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Company
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Administration Tools
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Maintenance
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex align-items-center" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="employee search"
            aria-label="Search"
          />
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="magnifying-glass"
          ></font-awesome-icon>
          <font-awesome-icon
            class="fa-icon cursor-pointer"
            icon="bell"
          ></font-awesome-icon>
        </form>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown admin">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 80px;
  background-color: #333333;
  padding: 16px;

  .container-fluid {
    .navbar-brand {
      img {
        height: 45px;
      }
    }

    div {
      &.navbar-collapse {
        justify-content: flex-end;
      }

      .navbar-nav {
        li a {
          font-size: 16px;
          color: #dddddd;
          font-weight: 300;
        }

        li.admin a {
          font-size: 16px;
          color: #2fc7e2;
          font-weight: 300;
        }
      }

      form {
        height: 40px;

        .form-control {
          border: 0;
          background-color: transparent;
          border-bottom: 1px solid #fff;
          border-radius: 0;
        }

        .fa-icon {
          color: #dddddd;
          opacity: 0.6;
          margin: 0 8px;
        }
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .navbar {
    height: unset;
    .container-fluid {
      div {
        .navbar-nav {
          li {
            ul.dropdown-menu {
              background-color: #333333;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>

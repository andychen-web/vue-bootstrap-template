<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Logo</router-link>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >首頁</router-link
            >
          </li>

          <!-- <li class="dropdown">
            <router-link
              to=""
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Code Sandbox
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="form" class="dropdown-item">Form</router-link>
              </li>
            </ul>
          </li> -->
        </ul>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<style lang="scss" scoped></style>

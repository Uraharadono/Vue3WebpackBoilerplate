<template>
  <div id="side-bar" class="side-bar dark">
    <div class="side-bar-wrap">
      <div class="logo full-white">
        <div class="logo-wrap">
          <img
            alt="logo"
            class="logo-img"
            height="40"
            src="../../assets/logo.png">
        </div>
      </div>
      <div class="close-btn-block">
        <font-awesome-icon id="close-btn" class="text-end color-orange" icon="times" />
      </div>
      <div class="menu-wrap vertical">
        <div class="app-menu">
          <ul class="menu-ul">
            <li class="menu-item">
              <span class="group-title">Main</span>
            </li>

            <li class="menu-item has-sub">
              <a class="item-link" href="#">
                <span class="link-icon">
                  <font-awesome-icon icon="shopping-cart" />
                </span>
                <span class="link-text">Menu item 1</span>
                <i class="link-caret">
                  <font-awesome-icon icon="angle-double-right" />
                </i>
              </a>
              <ul class="sub">
                <li class="menu-item">
                  <router-link to="/item-1" class="item-link">
                    <span class="link-text">Menu item 1 Item 1 </span>
                    <span class="link-badge badge-sm badge badge-success">
                      New
                    </span>
                  </router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/item-2" class="item-link">
                    <span class="link-text">Menu item 1 Item 2</span>
                    <span class="link-badge badge-sm badge badge-success">
                      New
                    </span>
                  </router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/item-3" class="item-link">
                    <span class="link-text">Menu item 1 Item 3</span>
                  </router-link>
                </li>
                <li class="menu-item">
                  <a
                    class="item-link"
                    target="_blank"
                    href="#">
                    <span class="link-text">Menu item 1 Item 4</span>
                  </a>
                </li>
                <li class="menu-item disabled">
                  <a
                    class="item-link"
                    target="_blank"
                    href="#	">
                    <span class="link-text">Menu item 1 Item 5</span>
                    <span class="link-badge badge-sm badge badge-warning">Coming soon</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a
                    class="item-link"
                    target="_blank"
                    href="#">
                    <span class="link-text">Menu item 1 Item 6</span>
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-item has-sub">
              <a class="item-link" href="#">
                <span class="link-icon">
                  <font-awesome-icon icon="palette" />
                </span>
                <span class="link-text">Items 2</span>
                <i class="link-caret">
                  <font-awesome-icon icon="angle-double-right" />
                </i>
              </a>
              <ul class="sub">
                <li class="menu-item">
                  <a
                    class="item-link"
                    target="_blank"
                    href="#">
                    <span class="link-text">Items 2 Item 1</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a
                    class="item-link"
                    target="_blank"
                    href="#">
                    <span class="link-text">Items 2 Item 2</span>
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div id="side-bar-overlay" class="side-bar-overlay" />
  </div>
</template>

// bottom tab bar
class TTabBar extends HTMLElement {
  connectedCallback() {
    const tabs = [
      { icon: "images/home.svg",  label: "Today",    active: true  },
      { icon: "images/moon.svg",  label: "Schedule", active: false },
      { icon: "images/learn.svg", label: "Learn",    active: false },
      { icon: "images/user.svg",  label: "Profile",  active: false },
    ];

    this.innerHTML = `
      <div class="tab-bar">
        <div class="tab-bar-inner">
          ${tabs.map(t => `
            <div class="tab-item ${t.active ? "tab-item--active" : ""}">
              <img src="${t.icon}" class="tab-icon" alt="${t.label}" />
              <span class="tab-label">${t.label}</span>
            </div>
          `).join("")}
        </div>
        <div class="tab-bar-indicator">
          <div class="tab-bar-pill"></div>
        </div>
      </div>
    `;
  }
}
customElements.define("t-tab-bar", TTabBar);

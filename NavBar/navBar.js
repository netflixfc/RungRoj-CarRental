import logOut from "./../LogOut/logOut.js";

function renderNavbar() {
  const navContainer = document.getElementById("mainNav");
  if (!navContainer) {
    console.error("ไม่พบองค์ประกอบ #mainNav ใน DOM");
    return;
  }

  navContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg shadow fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">RungRoj CarRental</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="../index.html">หน้าแรก</a></li>
            <li class="nav-item"><a class="nav-link" href="../index.html#about">เกี่ยวกับเรา</a></li>
            <li class="nav-item"><a class="nav-link" href="../index.html#featuredVehicles">รถเด่นประจำวัน</a></li>
            <li class="nav-item"><a class="nav-link" href="../index.html#offers">ข้อเสนอพิเศษ</a></li>
            <li class="nav-item"><a class="nav-link" href="../index.html#categories">หมวดหมู่รถ</a></li>
            <li class="nav-item"><a class="nav-link" href="../support/support.html">ติดต่อเรา</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function updateAuthUI() {
  try {
    const authArea = document.getElementById("authArea");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const userArea = document.getElementById("userArea");
    const userIcon = document.getElementById("userIcon");
    const profileLink = document.getElementById("profileLink");
    const logoutLink = document.getElementById("logoutLink");

    if (!authArea || !loginBtn || !signupBtn || !userArea || !userIcon || !logoutLink) {
      console.error("ไม่พบองค์ประกอบที่จำเป็นใน DOM");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && typeof currentUser === "object") {
      loginBtn.classList.add("d-none");
      signupBtn.classList.add("d-none");
      userArea.classList.remove("d-none");
      userIcon.src = currentUser.profileImage || "imgs/person-circle.svg";
      logoutLink.addEventListener("click", logOut);
    } else {
      loginBtn.classList.remove("d-none");
      signupBtn.classList.remove("d-none");
      userArea.classList.add("d-none");
    }
  } catch (error) {
    console.error("เกิดข้อผิดพลาดขณะอัปเดต UI การตรวจสอบสิทธิ์:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  updateAuthUI();
});

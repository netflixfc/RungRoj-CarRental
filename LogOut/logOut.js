export default function logOut() {
  try {
    // ตรวจสอบว่ามีข้อมูล currentUser ใน localStorage หรือไม่
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      // ลบข้อมูล currentUser ออกจาก localStorage
      localStorage.removeItem("currentUser");
      console.log("ผู้ใช้ได้ออกจากระบบเรียบร้อยแล้ว");
    } else {
      console.warn("ไม่มีข้อมูลผู้ใช้ในระบบ");
    }
    // เปลี่ยนเส้นทางไปยังหน้าแรก
    window.location.href = "../index.html";
  } catch (error) {
    // จัดการข้อผิดพลาดที่อาจเกิดขึ้น
    console.error("เกิดข้อผิดพลาดขณะออกจากระบบ:", error);
  }
}


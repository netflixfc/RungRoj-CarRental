export default function adminLogOut() {
    // ตรวจสอบว่าผู้ใช้เป็นผู้ดูแลระบบก่อนออกจากระบบ
    const isAdmin = localStorage.getItem('admin');
    if (isAdmin) {
        // ลบข้อมูลผู้ดูแลระบบออกจาก localStorage
        localStorage.removeItem('admin');
        // เปลี่ยนเส้นทางไปยังหน้าแรก
        window.location.href = "../index.html";
    } else {
        console.error("ไม่พบข้อมูลผู้ดูแลระบบในระบบ");
    }
}
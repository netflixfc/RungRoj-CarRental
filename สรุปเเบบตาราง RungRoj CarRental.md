# โครงสร้างโครงการ RungRoj CarRental

---

## **ตารางโครงสร้างเมนู/หัวข้อของไฟล์ในโครงการ**

| **ลำดับที่** | **เมนู/หัวข้อ**             | **คำอธิบาย**                                                             | **ไฟล์ที่เกี่ยวข้อง**                          |
|--------------|------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1            | **หน้าแรก (Home)**           | หน้าแรกของเว็บไซต์ แสดงข้อมูลเกี่ยวกับบริการและภาพรวมของโครงการ        | `index.html`, `css/style.css`, `js/homeScript.js` |
| 2            | **เกี่ยวกับเรา (About)**     | ส่วนที่อธิบายเกี่ยวกับบริษัทและบริการ                                   | `index.html` (Section: #about)               |
| 3            | **รถเด่นประจำวัน**           | แสดงรถยนต์ที่เป็นไฮไลต์ในแต่ละวัน พร้อมรายละเอียด                      | `index.html` (Section: #featuredVehicles)    |
| 4            | **ข้อเสนอพิเศษ (Offers)**    | แสดงโปรโมชั่นพิเศษ เช่น ส่วนลดหรือแพ็กเกจพิเศษ                        | `index.html` (Section: #offers)              |
| 5            | **หมวดหมู่รถ (Categories)** | แสดงแบรนด์รถยนต์ที่ให้บริการ เช่น Toyota, Ford, Jeep                   | `index.html` (Section: #categories)          |
| 6            | **การจอง (Booking)**         | หน้าสำหรับการจองรถยนต์                                                 | `Booking/booking.html`, `js/bookingMain.js`  |
| 7            | **ประวัติการจอง**            | แสดงรายการการจองที่ผู้ใช้เคยทำไว้                                       | `bookingHistory/booking-history.html`        |
| 8            | **รายละเอียดรถ (Car Details)** | แสดงข้อมูลรายละเอียดของรถยนต์ เช่น รุ่น, ปี, ราคา, สถานะ               | `carsList/carsListings.html`, `carDetails/car-details.html` |
| 9            | **จัดการรถยนต์ (Manage Cars)** | สำหรับผู้ดูแลระบบ ใช้จัดการข้อมูลรถยนต์ เช่น เพิ่ม, ลบ, แก้ไข           | `manageCars/manage-cars.html`, `js/manage-cars.js` |
| 10           | **จัดการผู้ใช้ (Manage Users)** | สำหรับผู้ดูแลระบบ ใช้จัดการข้อมูลผู้ใช้ เช่น เพิ่ม, ลบ, แก้ไข            | `manageUsers/manage-users.html`, `js/manage-users.js` |
| 11           | **จัดการการจอง (Manage Bookings)** | สำหรับผู้ดูแลระบบ ใช้จัดการข้อมูลการจอง เช่น อนุมัติ, ยกเลิก          | `manageBookings/manage-bookings.html`        |
| 12           | **รายงานการเช่า (Rental Reports)** | แสดงรายงานการเช่ารถ เช่น รายได้, จำนวนการจอง                         | `rentalReports/rental-reports.html`          |
| 13           | **การชำระเงิน (Payment)**    | หน้าสำหรับการชำระเงิน เช่น การกรอกข้อมูลบัตรเครดิตหรือเลือกวิธีการชำระเงิน | `payment/payment.html`, `js/payment.js`       |
| 14           | **ประวัติการชำระเงิน (Payment History)** | แสดงรายการการชำระเงินที่ผู้ใช้เคยทำไว้ เช่น วันที่และจำนวนเงิน         | `paymentHistory/payment-history.html`, `js/payment-history.js` |
| 15           | **ติดต่อเรา (Support)**      | หน้าสำหรับให้ผู้ใช้ส่งข้อความหรือคำถามถึงทีมงาน                         | `support/support.html`, `js/support.js`      |
| 16           | **เข้าสู่ระบบ (Login)**      | หน้าสำหรับเข้าสู่ระบบของผู้ใช้                                          | `Login/Login.html`, `js/main.js`             |
| 17           | **สมัครสมาชิก (Register)**   | หน้าสำหรับสมัครสมาชิกใหม่                                              | `Register/Register.html`, `js/RegisterWithGoogle.js` |
| 18           | **ลืมรหัสผ่าน (Forgot Password)** | หน้าสำหรับรีเซ็ตรหัสผ่านในกรณีที่ผู้ใช้ลืมรหัสผ่าน                    | `ForgotPassword/forgot-password.html`        |
| 19           | **ออกจากระบบ (Log Out)**     | ฟังก์ชันสำหรับออกจากระบบ                                               | `LogOut/logOut.js`, `LogOut/AdminLogOut.js`  |
| 20           | **Navbar**                   | เมนูนำทางที่แสดงอยู่ด้านบนของทุกหน้า                                    | `NavBar/navBar.js`                           |
| 21           | **Footer**                   | ส่วนท้ายของเว็บไซต์ที่แสดงข้อมูลติดต่อหรือลิงก์สำคัญ                    | `Footer/Footer.js`                           |
| 22           | **ธีม (Theme Toggle)**       | ปุ่มสำหรับสลับธีม เช่น โหมดสว่าง/มืด                                   | `index.html` (Element: #themeToggle), `js/theme-toggle.js` |
| 23           | **การสมัครสมาชิกแบบอัตโนมัติ** | ใช้ Facebook/Gmail เพื่อสมัครสมาชิกและเข้าสู่ระบบ                      | ใช้ OAuth 2.0, `js/RegisterWithGoogle.js`, `js/FacebookLogin.js` |
| 24           | **แชทบอท AI**                | เพิ่มแชทบอท AI เพื่อตอบคำถามเกี่ยวกับบริการ เช่น การจองรถหรือโปรโมชั่น | ใช้ Azure Bot Framework หรือ ChatGPT API    |

---

## **คำอธิบายโครงสร้างไฟล์**

โครงสร้างไฟล์ในโครงการ RungRoj CarRental ถูกออกแบบให้แยกส่วนการทำงานอย่างชัดเจน เพื่อให้ง่ายต่อการพัฒนาและดูแลรักษาโค้ดในระยะยาว:

| **โฟลเดอร์/ไฟล์**         | **คำอธิบาย**                                                                 |
|----------------------------|------------------------------------------------------------------------------|
| `index.html`               | ไฟล์หน้าแรกของเว็บไซต์ แสดงข้อมูลภาพรวมและบริการของโครงการ                |
| `css/style.css`            | ไฟล์ CSS หลักสำหรับการจัดการสไตล์ของเว็บไซต์                               |
| `js/homeScript.js`         | ไฟล์ JavaScript สำหรับการจัดการฟังก์ชันในหน้าแรก                           |
| `Booking/booking.html`     | ไฟล์ HTML สำหรับหน้าการจองรถยนต์                                            |
| `js/bookingMain.js`        | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าการจองรถยนต์                     |
| `bookingHistory/booking-history.html` | ไฟล์ HTML สำหรับแสดงประวัติการจองของผู้ใช้                        |
| `carsList/carsListings.html` | ไฟล์ HTML สำหรับแสดงรายการรถยนต์ทั้งหมด                                   |
| `carDetails/car-details.html` | ไฟล์ HTML สำหรับแสดงรายละเอียดของรถยนต์แต่ละคัน                         |
| `manageCars/manage-cars.html` | ไฟล์ HTML สำหรับผู้ดูแลระบบในการจัดการข้อมูลรถยนต์                       |
| `js/manage-cars.js`        | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าจัดการรถยนต์                     |
| `manageUsers/manage-users.html` | ไฟล์ HTML สำหรับผู้ดูแลระบบในการจัดการข้อมูลผู้ใช้                     |
| `js/manage-users.js`       | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าจัดการผู้ใช้                     |
| `manageBookings/manage-bookings.html` | ไฟล์ HTML สำหรับผู้ดูแลระบบในการจัดการข้อมูลการจอง                |
| `rentalReports/rental-reports.html` | ไฟล์ HTML สำหรับแสดงรายงานการเช่ารถ เช่น รายได้และจำนวนการจอง       |
| `payment/payment.html`     | ไฟล์ HTML สำหรับหน้าการชำระเงิน                                            |
| `js/payment.js`            | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าการชำระเงิน                     |
| `paymentHistory/payment-history.html` | ไฟล์ HTML สำหรับแสดงประวัติการชำระเงินของผู้ใช้                   |
| `support/support.html`     | ไฟล์ HTML สำหรับหน้าติดต่อเรา                                               |
| `js/support.js`            | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าติดต่อเรา                        |
| `Login/Login.html`         | ไฟล์ HTML สำหรับหน้าล็อกอิน                                                 |
| `js/main.js`               | ไฟล์ JavaScript สำหรับจัดการฟังก์ชันในหน้าล็อกอิน                         |
| `Register/Register.html`   | ไฟล์ HTML สำหรับหน้าสมัครสมาชิก                                             |
| `js/RegisterWithGoogle.js` | ไฟล์ JavaScript สำหรับการสมัครสมาชิกผ่าน Google                            |
| `ForgotPassword/forgot-password.html` | ไฟล์ HTML สำหรับหน้าลืมรหัสผ่าน                                   |
| `LogOut/logOut.js`         | ไฟล์ JavaScript สำหรับฟังก์ชันออกจากระบบ                                   |
| `NavBar/navBar.js`         | ไฟล์ JavaScript สำหรับจัดการเมนูนำทาง (Navbar)                             |
| `Footer/Footer.js`         | ไฟล์ JavaScript สำหรับจัดการส่วนท้ายของเว็บไซต์ (Footer)                   |
| `js/theme-toggle.js`       | ไฟล์ JavaScript สำหรับจัดการปุ่มสลับธีม (Theme Toggle)                     |
| `js/FacebookLogin.js`      | ไฟล์ JavaScript สำหรับการเข้าสู่ระบบผ่าน Facebook                          |
| `js/RegisterWithGoogle.js` | ไฟล์ JavaScript สำหรับการสมัครสมาชิกผ่าน Google                            |

--- 
| `cars.json`                | ไฟล์ JSON สำหรับเก็บข้อมูลรถยนต์ เช่น รุ่น, ปี, ราคา                       |

                                                                |
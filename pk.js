var crurl = window.location.href;
if (crurl.includes("https://bvdkht.vn/feedback/2866/phong-kham-tphcm.html"
)) {
    document.querySelector('html').innerHTML = `
   <!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Phòng Khám TPHCM - Giới thiệu</title>
  <meta name="description" content="Phòng Khám TPHCM - Trung tâm khám chữa bệnh đa chuyên khoa, đội ngũ bác sĩ chuyên gia, cơ sở vật chất hiện đại, dịch vụ khám chữa bệnh tận tâm." />
  <style>
    :root{--accent:#2b6cb0;--muted:#6b7280;--card:#ffffff;--bg:#f7fbff}
    *{box-sizing:border-box}
    body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.5;margin:0;background:var(--bg);color:#0f172a}
    .container{max-width:1100px;margin:32px auto;padding:24px}
    .hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center}
    .card{background:var(--card);border-radius:14px;padding:22px;box-shadow:0 6px 18px rgba(12,18,28,0.08)}
    h1{margin:0 0 8px;font-size:28px}
    p.lead{color:var(--muted);margin:0 0 18px}
    .pill{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(90deg,#2563eb22,transparent);padding:8px 12px;border-radius:999px;color:var(--accent);font-weight:600}
    .features{display:flex;flex-wrap:wrap;gap:12px;margin-top:14px}
    .feature{flex:1 1 calc(50% - 12px);min-width:180px;background:#fbfdff;padding:12px;border-radius:10px}
    .contact{display:flex;flex-direction:column;gap:10px}
    .btn{display:inline-block;padding:10px 14px;border-radius:10px;background:var(--accent);color:white;text-decoration:none;font-weight:600}
    .muted{color:var(--muted);font-size:14px}
    .map{height:220px;border-radius:10px;overflow:hidden}
    footer{margin-top:22px;text-align:center;color:var(--muted);font-size:13px}
    @media (max-width:880px){.hero{grid-template-columns:1fr;}.feature{flex:1 1 100%}}
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <section class="card">
        <div class="pill">Phòng Khám TPHCM</div>
        <h1>Chăm sóc sức khỏe toàn diện, tận tâm và chuyên nghiệp</h1>
        <p class="lead">Phòng Khám TPHCM là cơ sở y tế đa khoa cung cấp dịch vụ khám chữa bệnh chất lượng, trang thiết bị hiện đại và đội ngũ bác sĩ giàu kinh nghiệm. Chúng tôi hướng tới chăm sóc bệnh nhân an toàn, nhanh chóng và minh bạch.</p>

        <div class="features">
          <div class="feature">
            <strong>Đội ngũ chuyên gia</strong>
            <div class="muted">Bác sĩ chuyên khoa nhiều năm kinh nghiệm, từng công tác tại bệnh viện lớn.</div>
          </div>
          <div class="feature">
            <strong>Trang thiết bị</strong>
            <div class="muted">Máy xét nghiệm, siêu âm, nội soi, hệ thống chẩn đoán hình ảnh hiện đại.</div>
          </div>
          <div class="feature">
            <strong>Dịch vụ đa dạng</strong>
            <div class="muted">Khám tổng quát, khám chuyên khoa, xét nghiệm, điều trị ngoại trú và tiểu phẫu.</div>
          </div>
          <div class="feature">
            <strong>Quy trình nhanh gọn</strong>
            <div class="muted">Đặt lịch trực tuyến, tiếp đón chuyên nghiệp, thông báo kết quả rõ ràng.</div>
          </div>
        </div>

        <div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
          <a class="btn" href="#dat-lich">Đặt lịch khám</a>
          <a style="text-decoration:none;color:var(--accent);font-weight:600" href="#lien-he">Liên hệ</a>
        </div>
      </section>

      <aside class="card contact">
        <div>
          <strong>Thông tin cơ bản</strong>
          <div class="muted">Địa chỉ: Thành phố Hồ Chí Minh</div>
        </div>
        <div>
          <strong>Giờ hoạt động</strong>
          <div class="muted">Thứ 2 – Chủ nhật: 07:30 – 19:00</div>
        </div>
        <div>
          <strong>Hotline</strong>
          <a class="btn" href="tel:+84901234567">(+84) 901 234 567</a>
        </div>
        <div class="map">
          <!-- Thay bằng iframe Google Maps khi dùng thật -->
          <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#e6eefc" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-size="14">Vị trí bản đồ (chèn iframe Google Maps khi triển khai)</text>
          </svg>
        </div>
        <div style="display:flex;gap:8px;justify-content:space-between;align-items:center">
          <div class="muted">Dịch vụ nổi bật</div>
          <div style="font-weight:700">Khám Nam khoa • Phụ khoa • Da liễu</div>
        </div>
      </aside>
    </div>

    <section id="dat-lich" style="margin-top:20px">
      <div class="card">
        <h2 style="margin-top:0">Đặt lịch nhanh</h2>
        <form onsubmit="handleSubmit(event)" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <input id="name" required placeholder="Họ tên" style="flex:1;padding:10px;border-radius:8px;border:1px solid #e6eefc" />
          <input id="phone" required placeholder="Số điện thoại" style="width:180px;padding:10px;border-radius:8px;border:1px solid #e6eefc" />
          <select id="service" style="padding:10px;border-radius:8px;border:1px solid #e6eefc">
            <option>Khám tổng quát</option>
            <option>Khám nam khoa</option>
            <option>Khám phụ khoa</option>
            <option>Da liễu</option>
          </select>
          <button class="btn" type="submit" style="margin-left:auto">Gửi yêu cầu</button>
        </form>
        <p id="msg" class="muted" style="margin-top:12px"></p>
      </div>
    </section>

    <footer>
      © <span id="year"></span> Phòng Khám TPHCM. Bảo lưu mọi quyền.
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    function handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const msg = document.getElementById('msg');
      if(!name || !phone){ msg.textContent = 'Vui lòng nhập họ tên và số điện thoại.'; return }
      // Giả lập gửi dữ liệu - thay bằng fetch() tới API khi có backend
      msg.textContent = `Cảm ơn ${name}. Yêu cầu đặt lịch cho dịch vụ "${service}" đã được ghi nhận. Chúng tôi sẽ gọi lại theo số ${phone} trong vòng 24 giờ.`;
      e.target.reset();
    }
  </script>
</body>
</html>


    `;

}

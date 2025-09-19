// Lấy tham số page từ URL
const params = new URLSearchParams(window.location.search);
const page = params.get("page") || "01";

// Nội dung HTML theo page
const pages = {
  "01": `
    <h1 style="color:#007bc8; text-align:center;">Phòng Khám Đa Khoa Tân Bình</h1>
    <p style="text-align:justify;">
      Đây là giao diện <b>01</b>. Nội dung giới thiệu cơ bản về phòng khám.
    </p>
  `,
  "02": `
    <h1 style="color:green; text-align:center;">Dịch vụ Y Tế Phòng Khám</h1>
    <p style="text-align:justify;">
      Đây là giao diện <b>02</b>. Thông tin các dịch vụ khám chữa bệnh nổi bật.
    </p>
  `,
  "03": `
    <h1 style="color:darkred; text-align:center;">Liên Hệ Phòng Khám</h1>
    <p style="text-align:justify;">
      Đây là giao diện <b>03</b>. Bao gồm thông tin liên hệ, địa chỉ và hotline.
    </p>
  `
  ,
  "04": `
<!DOCTYPE html>
  <html lang="vi">
    <head>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <meta id="MetaRobots" name="ROBOTS" content="INDEX, FOLLOW">
        <meta charset="utf-8">
        <title>Điều trị bệnh đa khoa ở phòng khám chuyên khoa An Đông </title>
        <meta content="Công ty TNHH Phòng khám Đa Khoa An Đông (số 360 An Dương Vương, P.4, Q.5, TP. HCM) là một địa chỉ y tế uy tín tại khu vực TP. HCM" name="description">
        <link href="https://i.imgur.com/6QoAyxP.jpeg" rel="shortcut icon" type="image/x-icon">
        <script type="application/ld+json">
            {"@context":"https://schema.org/","@type":"CreativeWorkSeason","name":"Điều trị bệnh đa khoa ở phòng khám chuyên khoa An Đông ","aggregateRating":{"@type":"AggregateRating","ratingValue":"9.5","ratingCount":"627","bestRating":"10","worstRating":"1"}}
        </script>
        <link href="https://v.timduongdi.com/giaodien.css" rel="stylesheet">
    </head>
    <body>
<div class="header" style="display: flex; justify-content: center;">
    <div class="logo"> <a href="#"> <img src="https://i.imgur.com/t2bFu9a.png" alt="Logo" title="Logo"  width="510" height="105"> </a></div></div>
<h1 style="text-align: center;">Điều trị bệnh đa khoa ở phòng khám chuyên khoa An Đông </h1>
<div id="content" style="text-align: left;">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">


<p style="text-align:justify;">
<a href="https://phongkhamdakhoaandong.nicepage.io/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Công ty TNHH Phòng khám Đa Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> (số 360 An Dương Vương, P.4, Q.5, TP. HCM) là một địa chỉ y tế uy tín tại khu vực TP. HCM. Với đội ngũ bác sĩ tận tâm, trang thiết bị y tế tiên tiến và không gian thoải mái, phòng khám cam kết mang đến cho người bệnh sự an tâm và hài lòng về sức khỏe của bản thân.</span>
</p>
<h2 style="text-align:justify;">
<span style="background-color:transparent;color:#ff0000;">
<strong>Công ty TNHH Phòng Khám Đa Khoa An Đông khám chữa đa dạng các lĩnh vực bệnh</strong>
</span>
</h2>
<p style="text-align:justify;">
<a href="https://phongkhamchuyenkhoaandong.vn/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> tự hào đáp ứng điều trị đa dạng các bệnh lý liên quan đến nội khoa, ngoại khoa và dịch vụ nhằm để thực hiện nhu cầu chăm sóc sức khỏe của người bệnh. Dưới đây là một số chuyên khoa quan trọng mà phòng khám cung cấp:</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">
<strong>- Ngoại khoa:</strong> Phòng khám hỗ trợ trong việc cắt và khâu bao quy đầu trường hợp bao quy đầu bị hẹp, dài;...</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">
<strong>- Da liễu:&nbsp;</strong>Chuyên gia da liễu tại cơ sở y tế sẽ giúp bệnh nhân chăm sóc và điều trị các vấn đề về da như mụn trứng cá, eczema, viêm da, nám da và các vấn đề khác liên quan đến da.</span>
</p>
<p style="text-align:center;">
<span style="background-color:transparent;color:#000000;">
<img src="https://i.imgur.com/VZwfmfl.jpeg">
</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Đây chỉ là một số chuyên khoa chất lượng và nổi bật tại&nbsp;</span>
<a href="https://bvdkht.vn/feedback/2849/phong-kham-chuyen-khoa-an-dong.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;">. Khi trực tiếp đến với cơ sở y tế, người bệnh sẽ được đội ngũ nhân viên giàu kinh nghiệm và tận tâm chăm sóc tốt nhất cho sức khỏe của bản thân.&nbsp;</span>
</p>
<h2 style="text-align:justify;">
<span style="background-color:transparent;color:#ff0000;">
<strong>Công ty TNHH Phòng Khám Đa Khoa An Đông hội tụ các đặc điểm nổi bật</strong>
</span>
</h2>
<p style="text-align:justify;">
<a href="https://baomoi.com/phong-kham-an-dong-dia-chi-kham-chua-benh-chuyen-nghiep-c51686139.epi">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> là một cơ sở y tế đa chuyên khoa tọa lạc tại vị trí thuận tiện với mục tiêu cung cấp dịch vụ chăm sóc sức khỏe toàn diện và chất lượng cao đến cho bệnh nhân. Dưới đây là một số thông tin chi tiết nổi bật về phòng khám như:</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Đội ngũ chuyên gia chất lượng cao&nbsp;</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Phòng khám tự hào có một đội ngũ y bác sĩ và nhân viên y tế có trình độ chuyên môn cao, giàu kinh nghiệm và tận tâm với sức khỏe bệnh nhân. Bác sĩ trực thuộc tại phòng khám đều là những thạc sĩ, tiến sĩ hàng đầu từng công tác tại các bệnh viện lớn. Họ có kinh nghiệm chuyên sâu về bệnh, nắm bắt triệu chứng nhanh chóng để đưa ra phương án điều trị phù hợp. Cơ sở y tế luôn cam kết mang đến cho mọi người bệnh sự chăm sóc an toàn và chất lượng.&nbsp;</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Trang thiết bị y tế tiên tiến</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Công ty TNHH&nbsp;</span>
<a href="https://suckhoe123.vn/tin-tuc/phong-kham-an-dong-phuong-294.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Đa Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> được trang bị các thiết bị y tế hiện đại và tiên tiến nhằm đảm bảo chẩn đoán chính xác và điều trị hiệu quả. Phòng khám không ngừng cập nhật công nghệ và thiết bị mới nhất để đáp ứng nhu cầu y tế ngày càng cao của khách hàng.</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Dịch vụ chăm sóc toàn diện</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<a href="https://vrrc.apc.tw/ckfinder/ckfiles/files/13327625.pdf">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> cung cấp các dịch vụ chăm sóc sức khỏe toàn diện bao gồm khám bệnh, chẩn đoán, điều trị, phòng ngừa và tư vấn sức khỏe. Cơ sở y tế luôn đảm bảo mục tiêu mọi khách hàng đều nhận được sự chăm sóc và giải pháp y tế tốt nhất cho nhu cầu riêng của người bệnh.</span>
</p>
<p style="text-align:center;">
<span style="background-color:transparent;color:#000000;">
<img src="https://i.imgur.com/EVpqMnE.jpeg">
</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Không gian thoải mái và thân thiện</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Phòng khám tạo ra một không gian khám chữa bệnh thoải mái và thân thiện, giúp khách hàng cảm thấy an toàn và tự tin trong quá trình điều trị. Luôn tạo điều kiện thuận lợi để khách hàng có trải nghiệm y tế tốt nhất.</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Dịch vụ khách hàng tận tâm&nbsp;</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Tại công ty TNHH&nbsp;</span>
<a href="https://amavet.com.vn/kcfinder/upload/files/top10udad360adv.pdf">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>phòng khám Đa Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;">, khách hàng luôn là ưu tiên hàng đầu. Phòng khám cam kết đáp ứng mọi nhu cầu của khách hàng một cách tận tâm và nhanh chóng. Đội ngũ nhân viên luôn sẵn sàng lắng nghe và hỗ trợ khách hàng trong mọi thời điểm.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Tóm lại,&nbsp;</span>
<a href="http://phongkhamdakhoaandong.xim.tv/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>phòng khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> tự hào là một địa chỉ y tế tin cậy với đội ngũ chuyên gia, trang thiết bị hiện đại và dịch vụ chăm sóc uy tín và an toàn tại khu vực thành phố Hồ Chí Minh.</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#0000ff;">
<i>
<strong>Thời gian làm việc&nbsp;</strong>
</i>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Tất cả các ngày trong tuần từ 8:00 - 20:00 và luôn làm việc trong các ngày Lễ, Tết. Chính vì thế các bạn có thời gian và công việc bận rộn có thể thoải mái lựa chọn khung giờ thăm khám phù hợp với bản thân.&nbsp;</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">PHÒNG KHÁM CHUYÊN KHOA AN ĐÔNG</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Địa chỉ: 360 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Hotline: 028 7777 9888</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Website:&nbsp;</span>
<a href="https://phongkhamchuyenkhoaandong.vn">
<span style="background-color:transparent;color:#1155cc;">
<u>https://phongkhamchuyenkhoaandong.vn</u>
</span>
</a>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Facebook:&nbsp;</span>
<a href="https://www.facebook.com/phongkhamandong/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng Khám An Đông</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Youtube:&nbsp;</span>
<a href="https://www.youtube.com/@Ph%C3%B2ngKh%C3%A1mChuy%C3%AAnKhoaAn%C4%90%C3%B4ng">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng Khám Chuyên Khoa An Đông</u>
</strong>
</span>
</a>
</p>
<p>&nbsp;</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">
<strong>Xem thêm báo chí nói gì về Phòng Khám Đa Khoa An Đông:</strong>
</span>
</p>
<p style="text-align:justify;">
<a href="https://suckhoe123.vn/tin-tuc/phong-kham-an-dong-phuong-294.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông Phường Chợ Quán - Địa chỉ chăm sóc sức khỏe nam giới toàn diện</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://vov.vn/doanh-nghiep/thong-tin-doanh-nghiep/dat-hen-truc-tuyen-tai-phong-kham-an-dong-tien-loi-nhanh-chong-va-bao-mat-post1226719.vov">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Đặt hẹn trực tuyến tại Phòng khám An Đông: Tiện lợi, nhanh chóng và bảo mật</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://tuoitre.vn/dich-vu-dat-hen-truc-tuyen-cua-phong-kham-chuyen-khoa-an-dong-quan-5-20250624173143567.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Dịch vụ đặt hẹn trực tuyến của Phòng khám chuyên khoa An Đông, quận 5</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://vov.vn/doanh-nghiep/thong-tin-doanh-nghiep/phong-kham-an-dong-phuong-cho-quan-dia-chi-tham-kham-nam-khoa-post1216277.vov">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông phường Chợ Quán – địa chỉ thăm khám nam khoa</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://congan.com.vn/doi-song/suc-khoe/phong-kham-an-dong-luon-dat-chat-luong-dich-vu-va-su-hai-long-cua-khach-hang-len-hang-dau_172534.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông luôn đặt chất lượng dịch vụ và sự hài lòng của khách hàng lên hàng đầu</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://congan.com.vn/doi-song/suc-khoe/phong-kham-da-khoa-an-dong-uy-tin-tan-tam-vi-suc-khoe-cong-dong_177951.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Đa Khoa An Đông uy tín, tận tâm vì sức khỏe cộng đồng</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://vneconomy.vn/phong-kham-da-khoa-an-dong-co-tot-khong.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám Đa Khoa An Đông có tốt không?&nbsp;</u>
</strong>
<u>&nbsp;</u>
</span>
</a>
<span style="background-color:transparent;color:#5f5f5f;">
<strong>&nbsp;</strong>
</span>
</p>
<p style="text-align:justify;">
<a href="https://dantri.com.vn/suc-khoe/phong-kham-an-dong-dia-chi-cham-soc-suc-khoe-tai-tphcm-20241218202022715.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông - địa chỉ chăm sóc sức khỏe tại TPHCM&nbsp;</u>
</strong>
<u>&nbsp;</u>
</span>
</a>
<span style="background-color:transparent;color:#5f5f5f;">
<strong>&nbsp;</strong>
</span>
</p>
<p style="text-align:justify;">
<a href="https://vtcnews.vn/phong-kham-an-dong-dia-chi-kham-chua-benh-chuyen-nghiep-ar931025.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông – Địa chỉ khám chữa bệnh chuyên nghiệp</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://baomoi.com/phong-kham-an-dong-dia-chi-kham-chua-benh-chuyen-nghiep-c51686139.epi">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông – Địa chỉ khám chữa bệnh chuyên nghiệp</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://www.nguoiduatin.vn/phong-kham-an-dong-360-d-an-duong-vuong-phuong-4-quan-5-20424121910463483.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng Khám An Đông 360 Đ. An Dương Vương, Phường 4, Quận 5&nbsp;</u>
</strong>
<u>&nbsp;</u>
</span>
</a>
<span style="background-color:transparent;color:#5f5f5f;">
<strong>&nbsp;</strong>
</span>
</p>
<p style="text-align:justify;">
<a href="https://tinmoi.vn/dich-vu-dat-hen-cong-nghe-cao-cua-phong-kham-chuyen-khoa-an-dong-quan-5-d330-011640161.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Dịch vụ đặt hẹn công nghệ cao của Phòng khám Chuyên khoa An Đông Quận 5</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://ngoisao.vn/suc-khoe/cham-soc-suc-khoe/phong-kham-an-dong-360-dong-hanh-cung-ban-tren-hanh-trinh-suc-khoe-455403.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám An Đông 360 – Đồng hành cùng bạn trên hành trình sức khỏe</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://vnreview.vn/threads/chuyen-khoa-an-dong-doi-tac-tin-cay-cho-suc-khoe-cua-ban.62882/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Chuyên Khoa An Đông - Đối tác tin cậy cho sức khỏe của bạn</u>
</strong>
</span>
</a>
</p>
<p style="text-align:justify;">
<a href="https://doisongvietnam.vn/chuyen-khoa-an-dong-doi-tac-tin-cay-cho-suc-khoe-cua-ban-157334-6.html">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Chuyên khoa An Đông - Đối tác tin cậy cho sức khỏe của bạn</u>
</strong>
</span>
</a>
</p>



    <div id="button" style="position:fixed; right:2%; bottom:10%; z-index:99999;">
    <div class="chat">
        <a target="_blank" href="https://npa.zoosnet.net/LR/Chatpre.aspx?id=NPA46777247&c" rel="nofollow">
            <img src="https://global-uploads.webflow.com/5c93193a199a684109dd80f8/600fe01e1663232bccf14af5_5d7f40f74cc8594c9d854185_rchat.gif" alt="Live Chat"> </a> </div> </div>
            <a rel="follow,noopener" href="https://npa.zoosnet.net/LR/Chatpre.aspx?id=NPA46777247&c" class="w-inline-block"><div><img style="position:fixed;left:auto;top:40%;width:120px!important;right:0%;bottom:auto;margin-top:100px;margin-right:-30px;margin-bottom:0px;" src="https://global-uploads.webflow.com/640696c266a0cb0b83d2c96a/64094447e77edc0c1e47abba_5cd3943ffeabaf5f03705231_hotline.gif" rel="nofollow" alt="" width="120px;" class="image"></div></a>
</body>
</html>

  `
};

// Kiểm tra page tồn tại
let html = pages[page] || `
  <h1 style="color:gray; text-align:center;">Không tìm thấy giao diện</h1>
  <p style="text-align:justify;">
    Bạn chưa chọn đúng tham số <b>?page=</b>. Ví dụ:
    <br><a href="?page=01">Trang 01</a> |
    <a href="?page=02">Trang 02</a> |
    <a href="?page=03">Trang 03</a>
  </p>
`;

// Gán HTML vào #app
document.getElementById("app").innerHTML = html;

// Tự động lấy H1 đầu tiên làm title
const h1 = document.querySelector("#app h1");
if (h1) {
  document.title = h1.textContent.trim();
}



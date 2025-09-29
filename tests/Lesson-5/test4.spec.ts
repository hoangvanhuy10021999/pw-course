import { test, expect } from '@playwright/test';

test('test 4', async ({ page }) => {
    await test.step('Access Link', async () => {
        await page.goto('https://material.playwrightvn.com');

        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });

    let personalNotes = [
        { title: "Tổng Bí Thư: 'Khoa học công nghệ là con đường sống còn'", content: "Tổng Bí thư Tô Lâm cho rằng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số không chỉ là lựa chọn mà là con đường sống còn để đất nước phát triển nhanh, bền vững" },

        { title: "Mặt Trăng đang han gỉ do oxy từ Trái Đất", content: "Oxy rò rỉ từ Trái Đất có thể là nguồn duy nhất gây ra quá trình gỉ sét ở cực nam Mặt Trăng." },

        { title: "Cây cầu cao nhất thế giới ở Trung Quốc được xây như thế nào", content: "Cầu treo qua hẻm núi Hoa Giang sử dụng công nghệ dệt sợi cáp trên không, theo dõi sợi cáp theo thời gian thực, đổ bêtông làm mỏ neo cầu." },

        { title: "Startup Phần Lan trở thành 'đế chế' nhẫn thông minh tỷ USD thế nào", content: "Từ chiến dịch gây quỹ cộng đồng khiêm tốn, Oura vươn lên dẫn đầu thị trường nhẫn thông minh, giúp định hình lại cách theo dõi sức khỏe cá nhân." },

        { title: "Hàn Quốc chạy đua khôi phục 647 dịch vụ công trực tuyến", content: "Hàn Quốc đã khôi phục được 62 trong số 647 dịch vụ công bị gián đoạn do vụ cháy trung tâm dữ liệu ở Daejeon." },

        { title: "'Nên đưa AI vào tiểu học nhưng cần lộ trình thận trọng'", content: "Ông Hồ Đức Thắng, Viện trưởng Công nghệ số và Chuyển đổi số Quốc gia, cho rằng nên đưa AI vào trường tiểu học nhưng cần lộ trình thận trọng, an toàn." },

        { title: "FPT đạt ba giải thưởng tại AI4VN", content: "Ứng dụng công nghệ, sở hữu các nền tảng AI 'Make in Vietnam' giúp tập đoàn FPT đạt danh hiệu doanh nghiệp, giải pháp và cá nhân AI xuất sắc." },

        { title: "Ba nâng cấp đáng chờ đợi ở iPhone 18", content: "FaceID ẩn dưới màn hình, chip 2nm và iPhone gập là những nâng cấp khiến nhiều người dùng chọn chờ iPhone thế hệ kế tiếp thay vì mua iPhone 17." },

        { title: "Chế độ phản trọng lực giúp robot chịu mọi đòn tấn công", content: "Robot G1 của Unitree thể hiện khả năng dự đoán những cú ra đòn và điều chỉnh tư thế theo thời gian thực nhờ kết hợp camera chiều sâu, LiDAR 3D và motor ở khớp nối." },
    ];

    await test.step('Them note', async () => {
        for (let note of personalNotes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.click("//button[@id='add-note']");
        }
    });

    await test.step('Search note', async () => {
        for (let note of personalNotes) {
            await page.locator("//input[@id='search']").fill("iPhone 18");

        }
    });


});
Reviewer: ChienTX / Trainee: TaiNA
-----

### Jul 12, 2019

+ Có file hình bỏ trong thư mục app/assets/javascripts. 366f1568e5d1c8e1048d500f6d2194d3.png
+ Indentation không đúng rất nhiều chỗ, không được để các khoảng trống ở đầu mỗi dòng như vậy (album.js), không được bỏ trống dòng đầu tiên, không để lệch ra lệch vào. Mỗi lần thụt ra, thụt vào phải đúng chính xác 2 spaces
+ Indentation không đúng nhiều chỗ, ví dụ:


```
  $('img.close').click(
    function(){
      $(this).parent().parent().empty();
    }
    )
```

Mình không được để ký tự `)` thẳng 1 hàng với kí tự `}` phía trên như vậy, phải thụt ra. Cần sửa tương tự ở tất cả những chỗ khác (nếu có)

+ `require_tree .` phải để cuối cùng trong application.js
+ `AlbumController` thì cần để số nhiều
+ Chưa có phân trang khi lấy dữ liệu
+ Tên action đặt không đúng chuẩn Ruby (`editProfile`)
+ Tên method không có ý nghĩa: `new_arr1`, `new_arr`. Không được để các phương thức như vậy trong controller. Nếu cần là helper thì nên bỏ vào trong module helpers
+ Tại sao không dùng action `update` cho việc edit profile luôn?
+ Chưa áp dụng i18n
+ Chưa có authentication trong users controller, ai cũng có thể update profile của người khác?

+ trong `album.rb`, dòng sau viết quá cẩu thả, spaces và indent không đúng, tên của polymorphic cũng không được viết hoa như vậy. Phải đặt tên gợi nhớ chứ không đặt là 'Poly' như vậy, không ai hiểu là gì cả. Quy tắc thông thường là tên model và thêm able phía sau. Ví dụ: photoable

`has_many   :photos ,as: :Poly`

+ rule bắt buộc: phía trước các dấu `,`, `:` không bao giờ có dấu cách, phía sau các dấu này phải luôn có 1 dấu cách

+ tên file không đúng chuẩn: `newalbum`. Không được để <style> bên trong file html

+ Trang Home `index.html.erb`, không để login check user đã login chưa và hiển thị view như vậy. Cần để logic đó trong controller và render view phù hợp (ví dụ có 1 view khác là guest_index.html.erb)

+ Tên file nhiều chỗ đặt không đúng chuẩn ruby (cần cách nhau giữa các từ bằng dấu `_`)

+ Sao lại có 2 file showhinh và showhinh1?

+ Nhìn chung tính năng chưa có gì nhiều cả, còn thiếu rất nhiều thứ

QUAN TRỌNG:

+ Dù tính năng có thể chưa OK nhưng ít nhất phải trân trọng những đoạn code mình viết ra vì người khác sẽ đọc những đọc code đó. Những lỗi như sai indent, sai convention cần phải tránh bằng mọi giá. Nếu mình không rõ chỗ nào đó nên chủ động hỏi
+ Dev tốt hay dở sẽ do code quyết định
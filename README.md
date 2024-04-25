# Phone Horizone

## Mô tả

- Ứng dụng web bán điện thoại

- Công nghệ sử dụng:

- Frontend: ReactJs

- Backend: Nodejs với thư viện Express

- Database: MongoDb

## Hướng dẫn cài đặt

- Cài đặt Frontend:
	- Cài đặt nodejs (Phiên bản của ứng dụng: 20.11.0) - <a  href="https://nodejs.org/en/download/current">Cài đặt</a>
    - Vào thư mục client
	    - Cài đặt các gói package: ``npm install``
- Cài đặt Server:
	-  Cài đặt nodejs (Phiên bản của ứng dụng: 20.11.0) - <a  href="https://nodejs.org/en/download/current">Cài đặt</a>
	-  Ở thư mục chính:
	    - Cài đặt các gói package: ``npm install ``

- Cài đặt MongoDb
	- Tải MongoDb Compact: <a  href="[Download MongoDB Community Server | MongoDB](https://www.mongodb.com/try/download/community)">Cài đặt</a>

## Hướng dẫn chạy ứng dụng
- Chạy Frontend:
    - cd vào thư mục client
	- Mở terminal và chạy lệnh: ``npm start``
- Chạy Server:
    - Ở thư mục chính
	- Mở terminal và chạy lệnh: ``npm start``

## Tài khoản
- Tạo tài khoản mới bằng cách mở ứng dụng lên và đăng kí
- Hoặc có thể sử dụng api sau để đăng kí sản phẩm:
	- POST /api/users/register
	- body:
	``{ "username":  "username", "email":  "email", "password":  "password", "phone": "phone number", "answer": "answer" }``

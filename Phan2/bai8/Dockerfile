# Sử dụng Node.js image
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Expose cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "src/server.js"]

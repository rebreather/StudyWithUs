const app = require("../app.js"); //상위 폴더에 가서 app.js를 불러오기
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});
// async 컨트롤러에서 발생한 에러를 Express 에러 핸들러로 전달
// (Express 4는 Promise rejection을 자동으로 잡지 못함)
module.exports = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

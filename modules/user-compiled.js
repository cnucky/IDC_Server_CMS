'use strict';

//加载mongoose对象
var mongoose = require('../config/db');
var Schema = mongoose.Schema;
//创建用户Schema
var userSchema = new Schema({
  user: {
    webName: { type: String }, //用户平台名称
    username: { type: String, require: true }, //联系人姓名
    userCarded: { type: String }, //联系人身份证
    userPhoneNumber: { type: Number }, //联系人电话号码
    userQQ: { type: Number }, //联系人qq
    userAddress: { type: String }, //联系人地址
    userPayment: { type: String }, //联系人付款方式
    userTo: { type: String }, //用户所属的业务员
    serverTo: { type: Schema.Types.ObjectId, ref: 'server' }, //用户择服务器
    isPayment: { type: Boolean }, //用户是否付款
    search: { type: Boolean },
    uip: { type: Array }
  },
  admin: {
    username: { type: String }, //管理员用户名,
    password: { type: String }, //管理员密码
    validateNumber: { type: Number, default: 3 } //管理员权限级别
  }
});
//实例化Model
var User = mongoose.model('user', userSchema);
//导出User对象
module.exports = User;

//# sourceMappingURL=user-compiled.js.map
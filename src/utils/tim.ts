// // 从v2.11.2起，SDK 支持了 WebSocket，推荐接入；v2.10.2及以下版本，使用 HTTP
// // v2.24.0起，SDK 支持使用本地审核插件
// import TIM from 'tim-js-sdk';
// import TIMUploadPlugin from 'tim-upload-plugin';
// // import TIMProfanityFilterPlugin from 'tim-profanity-filter-plugin';

// // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
// const tim = TIM.create({
//   SDKAppID: 0 // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
// });

// // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#setLogLevel 接口的说明</a>
// tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
// // tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用

// // 注册腾讯云即时通信 IM 上传插件
// tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin });
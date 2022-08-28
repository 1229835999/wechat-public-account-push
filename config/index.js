export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx226788875630a30b",
    // 公众号appSecret
    appSecret: "031e40bc79932519035d1ce6b7d4ec86",
    // 模板消息id
    templateId: "D-Djgw2wPCQxtWSYRBjEM32jtNMPBdjiGOqKzNXNbcc",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["otAvt6pnxbOFzN5Y6oPrLmKvRmZ0", "otAvt6g-xJjAJ5qI0icJ0OvWZ5KM"],
     
    // 信息配置
    // 所在省份
    province: "山西",
    // 所在城市
    city: "晋中",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "灿灿", "year": "2003", "date": "02-18", "type": 'new'},
      {"name": "瑞凯", "year": "2002", "date": "06-03", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-04-07"
    
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

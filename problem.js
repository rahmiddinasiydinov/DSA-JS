
const jsonl_data_day1 = `\
{"timestamp":"2025-01-01 08:00:15","pageId":"/category/electronics","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-01 08:00:45","pageId":"/product/samsung-galaxy-s25","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-01 08:01:12","pageId":"/cart","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-01 08:02:30","pageId":"/category/smartphones","customerId":"b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1"}
{"timestamp":"2025-01-01 08:03:15","pageId":"/product/iphone-15-pro-128gb","customerId":"b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1"}
{"timestamp":"2025-01-01 08:04:20","pageId":"/checkout/shipping","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-01 08:05:10","pageId":"/category/gaming","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-01 08:05:45","pageId":"/product/ps5-console","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-01 08:06:20","pageId":"/cart","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-01 08:07:30","pageId":"/category/audio","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-01 08:08:15","pageId":"/product/sony-wh1000xm5","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-01 08:09:00","pageId":"/checkout/payment","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-01 08:10:25","pageId":"/category/laptops","customerId":"c2c2c2c2-c2c2-c2c2-c2c2-c2c2c2c2c2c2"}
{"timestamp":"2025-01-01 08:11:10","pageId":"/product/macbook-pro-16","customerId":"c2c2c2c2-c2c2-c2c2-c2c2-c2c2c2c2c2c2"}
{"timestamp":"2025-01-01 08:12:30","pageId":"/cart","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-01 08:13:15","pageId":"/category/tablets","customerId":"d3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3"}
{"timestamp":"2025-01-01 08:14:00","pageId":"/product/ipad-air","customerId":"d3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3"}
{"timestamp":"2025-01-01 08:15:20","pageId":"/checkout/shipping","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-01 08:16:45","pageId":"/category/accessories","customerId":"e4e4e4e4-e4e4-e4e4-e4e4-e4e4e4e4e4e4"}
{"timestamp":"2025-01-01 08:17:30","pageId":"/product/airpods-pro","customerId":"e4e4e4e4-e4e4-e4e4-e4e4-e4e4e4e4e4e4"}
{"timestamp":"2025-01-01 08:18:15","pageId":"/cart","customerId":"d3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3"}
{"timestamp":"2025-01-01 08:19:40","pageId":"/checkout/payment","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-01 08:20:25","pageId":"/category/cameras","customerId":"f5f5f5f5-f5f5-f5f5-f5f5-f5f5f5f5f5f5"}
{"timestamp":"2025-01-01 08:21:10","pageId":"/product/sony-a7iv","customerId":"f5f5f5f5-f5f5-f5f5-f5f5-f5f5f5f5f5f5"}
{"timestamp":"2025-01-01 08:22:35","pageId":"/checkout/shipping","customerId":"d3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3"}
{"timestamp":"2025-01-01 08:23:20","pageId":"/category/wearables","customerId":"g6g6g6g6-g6g6-g6g6-g6g6-g6g6g6g6g6g6"}
{"timestamp":"2025-01-01 08:24:05","pageId":"/product/apple-watch-9","customerId":"g6g6g6g6-g6g6-g6g6-g6g6-g6g6g6g6g6g6"}
{"timestamp":"2025-01-01 08:25:30","pageId":"/cart","customerId":"f5f5f5f5-f5f5-f5f5-f5f5-f5f5f5f5f5f5"}
{"timestamp":"2025-01-01 08:26:15","pageId":"/checkout/payment","customerId":"d3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3"}
{"timestamp":"2025-01-01 08:27:40","pageId":"/category/smart-home","customerId":"h7h7h7h7-h7h7-h7h7-h7h7-h7h7h7h7h7h7"}`;

const jsonl_data_day2 = `\
{"timestamp":"2025-01-02 09:15:20","pageId":"/category/smartphones","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-02 09:15:24","pageId":"/product/apple-watch-9","customerId":"g6g6g6g6-g6g6-g6g6-g6g6-g6g6g6g6g6g6"}
{"timestamp":"2025-01-02 09:16:45","pageId":"/product/pixel-8-pro","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-02 09:17:30","pageId":"/cart","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-02 09:18:15","pageId":"/category/laptops","customerId":"e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5"}
{"timestamp":"2025-01-02 09:19:40","pageId":"/product/lenovo-thinkpad","customerId":"e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5"}
{"timestamp":"2025-01-02 09:20:25","pageId":"/checkout/shipping","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-02 09:21:50","pageId":"/category/gaming","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-02 09:22:35","pageId":"/product/nintendo-switch-oled","customerId":"f47ac10b-58cc-4372-a567-0e02b2c3d479"}
{"timestamp":"2025-01-02 09:23:20","pageId":"/cart","customerId":"e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5"}
{"timestamp":"2025-01-02 09:24:45","pageId":"/category/accessories","customerId":"f6f6f6f6-f6f6-f6f6-f6f6-f6f6f6f6f6f6"}
{"timestamp":"2025-01-02 09:25:30","pageId":"/product/logitech-mx-master","customerId":"f6f6f6f6-f6f6-f6f6-f6f6-f6f6f6f6f6f6"}
{"timestamp":"2025-01-02 09:26:15","pageId":"/checkout/payment","customerId":"7c9e6679-7425-40de-944b-e07fc1f90ae7"}
{"timestamp":"2025-01-02 09:27:40","pageId":"/category/audio","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-02 09:28:25","pageId":"/product/airpods-max","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-02 09:29:10","pageId":"/checkout/shipping","customerId":"e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5"}
{"timestamp":"2025-01-02 09:30:35","pageId":"/category/cameras","customerId":"g7g7g7g7-g7g7-g7g7-g7g7-g7g7g7g7g7g7"}
{"timestamp":"2025-01-02 09:31:20","pageId":"/product/gopro-hero12","customerId":"g7g7g7g7-g7g7-g7g7-g7g7-g7g7g7g7g7g7"}
{"timestamp":"2025-01-02 09:32:05","pageId":"/cart","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-02 09:33:30","pageId":"/category/smart-home","customerId":"a1a1a1a1-a1a1-a1a1-a1a1-a1a1a1a1a1a1"}
{"timestamp":"2025-01-02 09:34:15","pageId":"/product/philips-hue","customerId":"a1a1a1a1-a1a1-a1a1-a1a1-a1a1a1a1a1a1"}
{"timestamp":"2025-01-02 09:35:40","pageId":"/checkout/payment","customerId":"e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5"}
{"timestamp":"2025-01-02 09:36:25","pageId":"/category/tablets","customerId":"h8h8h8h8-h8h8-h8h8-h8h8-h8h8h8h8h8h8"}
{"timestamp":"2025-01-02 09:37:10","pageId":"/product/surface-pro-9","customerId":"h8h8h8h8-h8h8-h8h8-h8h8-h8h8h8h8h8h8"}
{"timestamp":"2025-01-02 09:38:35","pageId":"/checkout/shipping","customerId":"37b51d19-2e17-4a8b-b491-1cf34c2e8ad1"}
{"timestamp":"2025-01-02 09:39:20","pageId":"/category/monitors","customerId":"c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3"}
{"timestamp":"2025-01-02 09:40:05","pageId":"/product/samsung-odyssey","customerId":"c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3"}`;

function makeArray(string) {
    return string.split('\n').map(element => JSON.parse(element));
}

function findLoyalCustomers(day1Data, day2Data) {
    const loyalHashMap = {};
    const day1 = makeArray(day1Data);
    const day2 = makeArray(day1Data);
    day1.forEach(record => record.)
}
console.log(findLoyalCustomers(jsonl_data_day1, jsonl_data_day2));
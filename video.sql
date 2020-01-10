/*
 Navicat Premium Data Transfer

 Source Server         : mongodb连接
 Source Server Type    : MongoDB
 Source Server Version : 40010
 Source Host           : localhost:27017
 Source Schema         : video

 Target Server Type    : MongoDB
 Target Server Version : 40010
 File Encoding         : 65001

 Date: 07/01/2020 03:22:54
*/


// ----------------------------
// Collection structure for admin
// ----------------------------
db.getCollection("admin").drop();
db.createCollection("admin");

// ----------------------------
// Documents of admin
// ----------------------------
db.getCollection("admin").insert([ {
    _id: ObjectId("5dd3f313f37b0000fa006fde"),
    name: "admin",
    pass: "admin"
} ]);

// ----------------------------
// Collection structure for comment
// ----------------------------
db.getCollection("comment").drop();
db.createCollection("comment");

// ----------------------------
// Documents of comment
// ----------------------------
db.getCollection("comment").insert([ {
    _id: ObjectId("5dd3f298f37b0000fa006fdd"),
    "movie_id": ObjectId("5dde40c62773e24cdca99b1d"),
    "user_id": ObjectId("5ddcecac85f9483c90fdd6bf"),
    content: "good",
    addtime: "2019-11-26 17:12:51"
} ]);
db.getCollection("comment").insert([ {
    _id: ObjectId("5de4c2fdc86b0000c20078f4"),
    "movie_id": ObjectId("5dde46ab51cac833b48bcdaa"),
    "user_id": ObjectId("5de508b8c86b0000c20078f8"),
    content: "good",
    addtime: "2019-11-26 17:12:51"
} ]);
db.getCollection("comment").insert([ {
    _id: ObjectId("5de7cc2afc5f77412c170cdd"),
    addtime: "2019-12-04 23:09:25",
    "movie_id": ObjectId("5dde40c62773e24cdca99b1d"),
    "user_id": ObjectId("5ddcecac85f9483c90fdd6bf"),
    content: "good",
    __v: NumberInt("0")
} ]);
db.getCollection("comment").insert([ {
    _id: ObjectId("5de8da45ef873227c41155ce"),
    addtime: "2019-12-05 18:05:07",
    "movie_id": ObjectId("5dde40c62773e24cdca99b1d"),
    "user_id": ObjectId("5ddcecac85f9483c90fdd6bf"),
    content: "good",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for favor
// ----------------------------
db.getCollection("favor").drop();
db.createCollection("favor");

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
db.getCollection("user").insert([ {
    _id: ObjectId("5ddcecac85f9483c90fdd6bf"),
    addtime: "2019-11-26 17:12:51",
    username: "jack",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ddced5385f9483c90fdd6c0"),
    addtime: "2019-11-26 17:12:51",
    username: "kefei",
    pass: "123456",
    email: "136@163.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508a4c86b0000c20078f5"),
    addtime: "2019-11-26 17:12:51",
    username: "pc",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508b7c86b0000c20078f6"),
    addtime: "2019-11-26 17:12:51",
    username: "hk",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508b8c86b0000c20078f7"),
    addtime: "2019-11-26 17:12:51",
    username: "ch",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508b8c86b0000c20078f8"),
    addtime: "2019-11-26 17:12:51",
    username: "jk",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508b9c86b0000c20078f9"),
    addtime: "2019-11-26 17:12:51",
    username: "fh",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bac86b0000c20078fa"),
    addtime: "2019-11-26 17:12:51",
    username: "fk",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bac86b0000c20078fb"),
    addtime: "2019-11-26 17:12:51",
    username: "nd",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bbc86b0000c20078fc"),
    addtime: "2019-11-26 17:12:51",
    username: "sl",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bbc86b0000c20078fd"),
    addtime: "2019-11-26 17:12:51",
    username: "sk",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bcc86b0000c20078fe"),
    addtime: "2019-11-26 17:12:51",
    username: "jd",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bcc86b0000c20078ff"),
    addtime: "2019-11-26 17:12:51",
    username: "jl",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bdc86b0000c2007900"),
    addtime: "2019-11-26 17:12:51",
    username: "jo",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bdc86b0000c2007901"),
    addtime: "2019-11-26 17:12:51",
    username: "dk",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bec86b0000c2007902"),
    addtime: "2019-11-26 17:12:51",
    username: "mo",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508bec86b0000c2007903"),
    addtime: "2019-11-26 17:12:51",
    username: "mck",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5de508c0c86b0000c2007904"),
    addtime: "2019-11-26 17:12:51",
    username: "rd",
    pass: "123",
    email: "163@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ded01d99724c622943245d1"),
    addtime: "2019-12-08 21:40:54",
    username: "chumo",
    pass: "123",
    email: "1459914498@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ded02629724c622943245d2"),
    addtime: "2019-12-08 21:40:54",
    username: "admin",
    pass: "q",
    email: "1459914498@qq.com",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for video
// ----------------------------
db.getCollection("video").drop();
db.createCollection("video");

// ----------------------------
// Documents of video
// ----------------------------
db.getCollection("video").insert([ {
    _id: ObjectId("5dde40c62773e24cdca99b1d"),
    addtime: "2019-11-27 17:14:41",
    title: "Me and animals",
    category: "youth",
    "cover_img": "http://localhost:7001/public/upload/1.jpg",
    url: "http://localhost:7001/public/upload/少儿安全教育 第2集 我和动物-流畅360P.mp4",
    description: "Children's safety education",
    __v: NumberInt("0")
} ]);
db.getCollection("video").insert([ {
    _id: ObjectId("5dde46ab51cac833b48bcdaa"),
    addtime: "2019-11-27 17:35:48",
    title: "Parking lot security",
    category: "other\r\n",
    "cover_img": "http://localhost:7001/public/upload/2.jpg",
    url: "http://localhost:7001/public/upload/少儿安全教育 第11集 停车场安全-流畅360P.mp4",
    description: "Children's safety education",
    __v: NumberInt("0")
} ]);
db.getCollection("video").insert([ {
    _id: ObjectId("5dde4bed51cac833b48bcdab"),
    addtime: "2019-11-27 17:35:48",
    title: "Outdoor game safety",
    category: "other\r\n",
    "cover_img": "http://localhost:7001/public/upload/3.jpg",
    url: "http://localhost:7001/public/upload/少儿安全教育 第12集 户外游戏安全-流畅360P.mp4",
    description: "Children's safety education",
    __v: NumberInt("0")
} ]);
db.getCollection("video").insert([ {
    _id: ObjectId("5dde4c2951cac833b48bcdac"),
    addtime: "2019-11-27 17:35:48",
    title: "On fire",
    category: "other\r\n",
    "cover_img": "http://localhost:7001/public/upload/4.jpg",
    url: "http://localhost:7001/public/upload/少儿安全教育 第13集 起火了-流畅360P.mp4",
    description: "Children's safety education",
    __v: NumberInt("0")
} ]);

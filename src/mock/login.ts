import Mock from "mockjs"

Mock.mock("/login", () => {
    console.log("test")
})

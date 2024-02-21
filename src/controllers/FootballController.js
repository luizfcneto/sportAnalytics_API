export default class FootballController{
    static async testAPI(req, res, next){
        console.log("testAPI is called");
        res.json({
            message: "testAPI is called and worked fine."
        }); 
    }
};
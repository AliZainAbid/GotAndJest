const got = require('got');

describe('test suite', () => {

    let userId;
    beforeEach(function () {
        console.log("GET all users details ")
    });
          
      afterEach(function () {
        console.log("All users' details are retrieved")
    });


    test('first test with jest and got ', async() => {
        const response = await got('https://reqres.in/api/users?page=2');
       // expect(response.status).toBe(200);
       console.log(response.body);
    });

    test('post request', async() => {
         await got.post('https://reqres.in/api/users' ,{
            "name": "morpheus",
            "job": "leader"
        }).then((res) => {
        expect(res.statusCode).toBe(201);
        console.log( 'direct', res.body)
        let resp = JSON.parse(res.body);
        console.log('parameter', resp);
        userId = resp["id"];
        console.log(userId)

    })
})

let userI = 11;

test('getting specific user ', async() => {
    const response = await got(`https://reqres.in/api/users/${userI}`);
    expect(response.statusCode).toBe(200);
   console.log(response.body);
});

})
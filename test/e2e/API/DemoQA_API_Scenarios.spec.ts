import {expect, test } from "@playwright/test";
import * as Constants from "../../../data/constants";

 let userId : string;
 let username: string;
 let isbn: string;
 let token: string;

test.describe("@API", async () => {

test("TC01_CreateUserAccount_Positive", async ({request}) => {


    const response = await request.post(Constants.API_ACCOUNT_CREATION_URL,{
    data : {        
        "userName": Constants.VALID_USERNAME,
        "password": Constants.VALID_PASSWORD
      }, headers: {
        "Accept": "application/json"
    }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    userId= responseUser.userID;
    username = responseUser.username;
})

test("TC01_CreateUserAccount_Negative", async ({request}) => {

    const response = await request.post(Constants.API_ACCOUNT_CREATION_URL,{
    data : {
        "userName": Constants.INVALID_USERNAME,
        "password": Constants.INVALID_PASSWORD
      }, headers: {
        "Accept": "application/json"
    }
    });


    expect(response.status()).toBe(400);


})

test("GenerateToken", async ({request}) => {


   const response = await request.post(Constants.GENERATE_TOKEN_URL,{
    data : {
        "userName": username,
        "password": Constants.VALID_PASSWORD
      }, headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseToken = await response.json();
    token= responseToken.token;
})

test("TC02_AddBooksToUser_Positive", async ({request}) => {

    const response = await request.post(Constants.ADD_LIST_OF_BOOKS_URL,{
    data : {
             "userId": userId,
             "collectionOfIsbns": [
               {
                 "isbn": Constants.VALID_ISBN
               }
             ]
           }, headers: {
                     "authorization": `Bearer ${token}`
                 }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseBook = await response.json();
    isbn = responseBook.books[0].isbn;
})

test("TC02_AddBooksToUser_Negative", async ({request}) => {

    const response = await request.post(Constants.ADD_LIST_OF_BOOKS_URL,{
    data : {
             "userId": userId,
             "collectionOfIsbns": [
               {
                 "isbn": Constants.INVALID_ISBN
               }
             ]
           }, headers: {
                     "authorization": `Bearer ${token}`
                 }
    });
    expect(response.status()).toBe(400);


})



test("TC03_DeleteAddedBook_Positive", async ({request}) => {

    const response = await request.delete(Constants.DELETE_BOOK_URL,{
    data : {
            "isbn": isbn,
            "userId": userId
            }, headers: {
                "authorization": `Bearer ${token}`
                   }
    });
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
})

test("TC03_DeleteAddedBook_Negative", async ({request}) => {

    const response = await request.delete(Constants.DELETE_BOOK_URL,{
    data : {
            "isbn": Constants.INVALID_ISBN,
            "userId": Constants.INVALID_USERNAME
            }, headers: {
                "authorization": `Bearer ${token}`
                   }
    });
    expect(response.status()).toBe(401);


})

test("DeleteUserAccount", async ({request}) => {

    const API_ACCOUNT_DELETE_URL = `https://demoqa.com/Account/v1/User/${userId}`;
    const response = await request.delete(API_ACCOUNT_DELETE_URL,{
    headers: {
                    "authorization": `Bearer ${token}`
                       }
    });
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();


})
})



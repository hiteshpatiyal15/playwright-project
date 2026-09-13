package com.restassured;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SimpleAPIRequest {

    public static void main(String[] args) {
        RestAssured.baseURI = "http://phoenix.techwithjatin.com/v1/";
        RequestSpecification request1 = RestAssured.given();
        RequestSpecification request2 = request1.header("content-type", "application/json");
        RequestSpecification request3 = request2.body("{\r\n" + //
                "    \"username\": \"iamfd\",\r\n" + //
                "    \"password\": \"password\"\r\n" + //
                "}");
        Response response = request3.post("login");
        System.out.println(response.asPrettyString());
        System.out.println(response.getStatusCode());
        System.out.println(response.getTime());
        System.out.println(response.getBody());
    }
}

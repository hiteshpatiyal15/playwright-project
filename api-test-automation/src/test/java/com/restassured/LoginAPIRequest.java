package com.restassured;

import io.restassured.http.ContentType;
import static io.restassured.RestAssured.given;

public class LoginAPIRequest {

    public static void main(String[] args) {
        given()
                .baseUri("http://phoenix.techwithjatin.com/v1/")
                .and()
                .contentType(ContentType.JSON)
                .and()
                .accept(ContentType.JSON)
                .and()
                .body("{\"username\":\"admin\",\"password\":\"admin\"}")
                .log().all()
                .when()
                .post("login")
                .then()
                .log().all()
                .statusCode(200)
                .and()
                .extract().response();
    }
}

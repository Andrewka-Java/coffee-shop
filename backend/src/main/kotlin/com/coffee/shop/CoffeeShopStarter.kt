package com.coffee.shop

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories

@EnableJdbcRepositories
@SpringBootApplication
class CoffeeShopStarter

fun main(args: Array<String>) {
    SpringApplication.run(CoffeeShopStarter::class.java, *args)
}
package com.coffee.shop.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
import javax.sql.DataSource

@Configuration
class CoffeeShopConfig {
    @Primary
    @Bean
    fun dataSource(): DataSource = EmbeddedDatabaseBuilder()
        .setType(EmbeddedDatabaseType.H2)
        .setName("coffee_shop")
        .addScripts(
            "classpath:sql/schema.sql",
            "classpath:sql/data.sql"
        )
        .build()
}
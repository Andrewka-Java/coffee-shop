package com.coffee.shop.repository

import com.coffee.shop.model.Coffee
import com.coffee.shop.model.Coffee.Companion.COFFEE_TABLE
import com.coffee.shop.model.Country
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface CoffeeRepository : CrudRepository<Coffee, Long> {
    @Query("SELECT * FROM $COFFEE_TABLE LIMIT :limit")
    fun findCoffeeWithLimit(limit: Int): Collection<Coffee>

    @Query("""SELECT * FROM $COFFEE_TABLE WHERE LOWER("name") LIKE CONCAT('%', LOWER(:search), '%') LIMIT :limit""")
    fun findByNameAndLimit(search: String, limit: Int): Collection<Coffee>

    @Query("""SELECT * FROM $COFFEE_TABLE WHERE "country" = :country LIMIT :limit""")
    fun findByCountry(country: Country, limit: Int): Collection<Coffee>
}
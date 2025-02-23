package com.coffee.shop.controller

import com.coffee.shop.model.Country
import com.coffee.shop.repository.CoffeeRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["*"])
class CoffeeController(
    private val coffeeRepository: CoffeeRepository
) {
    @GetMapping("/coffee")
    fun findAllCoffee(
        @RequestParam search: String?,
        @RequestParam limit: Int?,
        @RequestParam country: Country?
    ) = ResponseEntity.ok(
        when {
            search != null && limit != null ->
                coffeeRepository.findByNameAndLimit(search, limit)
            country != null && limit != null ->
                coffeeRepository.findByCountry(country, limit)
            limit == null -> coffeeRepository.findAll()
            else -> coffeeRepository.findCoffeeWithLimit(limit)
        }
    )

    @GetMapping("/coffee/{id}")
    fun findCoffeeById(@PathVariable id: Long) = ResponseEntity.ok(
        coffeeRepository.findById(id)
    )

}
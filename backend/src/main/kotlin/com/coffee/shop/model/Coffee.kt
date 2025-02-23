package com.coffee.shop.model

import com.coffee.shop.model.Coffee.Companion.COFFEE_TABLE
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import java.math.BigDecimal

@Table(COFFEE_TABLE)
data class Coffee(
    @Id @Column("id") var id: Long? = null,
    @Column("name") val name: String,
    @Column("price") val price: BigDecimal,
    @Column("country") val country: Country,
    @Column("img_name") val imgName: String
) {
    companion object {
        const val COFFEE_TABLE = "COFFEE"
    }
}

enum class Country(val label: String) {
    BRAZIL("Brazil"),
    KENYA("Kenya"),
    COLUMBIA("Columbia"),
    UNKNOWN("Unknown");

    companion object {
        fun getCountry(label: String) =
            entries.find { it.label == label } ?: UNKNOWN
    }
}
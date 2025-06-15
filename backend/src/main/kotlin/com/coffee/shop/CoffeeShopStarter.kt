package com.coffee.shop

import kotlinx.coroutines.*
import kotlinx.coroutines.future.future
import org.springframework.aot.generate.ValueCodeGenerator
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories
import java.io.IOException
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.properties.Delegates
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

@EnableJdbcRepositories
@SpringBootApplication
class CoffeeShopStarter

//fun main(args: Array<String>) {
//    SpringApplication.run(CoffeeShopStarter::class.java, *args)
//}

suspend fun loadImage() {
    withContext(Dispatchers.IO) {
        println("Start loading photo")
        Thread.sleep(3000)
        throw IOException("Network error")
    }
}

@JvmInline
value class A(private val age: Int) {
    init {
        require(age >= 0) { "Error" }
    }
}

fun main() = runBlocking {
    val scope = CoroutineScope(EmptyCoroutineContext)

    val customScope = LoadCoroutineScope { context, error ->
        println("Context ${context}, error ${error}")
    }

    coroutineScope {

    }

    future {

    }

    val job = customScope.launch {
        throw IOException("Bugagaga")
    }

//    val job1 = scope.launch {
//        println("Start job")
//
//        launch {
//            println("Start child coroutine")
//            delay(4000)
//            println("End child coroutine")
//        }
//
//        delay(3000)
//        println("Job end")
//    }
//
//    val job2 = scope.launch {
//        println("Another job start")
//        delay(5000)
//        println("Another job end")
//    }
//
//    delay(500)

    job.cancel()
}

class LoadCoroutineScope(
    private val parentCoroutineContext: CoroutineContext = EmptyCoroutineContext,
    private val dispatcher: CoroutineDispatcher = Dispatchers.IO,
    private val coroutineName: CoroutineName = CoroutineName(DEFAULT_COROUTINE_NAME),
    private val errorCallback: (CoroutineContext, Throwable) -> Unit
) : CoroutineScope {
    override val coroutineContext: CoroutineContext
        get() = parentCoroutineContext + dispatcher + coroutineName + SupervisorJob() +
                CoroutineExceptionHandler { coroutineContext, throwable ->
                    errorCallback(coroutineContext, throwable)
                }

    companion object {
        private const val DEFAULT_COROUTINE_NAME = "Loading Coroutine"
    }
}
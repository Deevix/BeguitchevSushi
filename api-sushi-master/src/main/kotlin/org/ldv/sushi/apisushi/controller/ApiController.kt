package org.ldv.sushi.apisushi.controller

import org.ldv.sushi.apisushi.dto.AlimentBoxDtoJson
import org.ldv.sushi.apisushi.dto.BoxDtoJson
import org.ldv.sushi.apisushi.repository.AlimentRepository
import org.ldv.sushi.apisushi.repository.BoxRepository
import org.ldv.sushi.apisushi.util.fromBoxToBoxDtoJson
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import java.util.Optional

@RestController
class ApiController  @Autowired constructor(
    private val boxRepository: BoxRepository,
    private val alimentRepository: AlimentRepository
    ) {

    @GetMapping("/api/boxes")
    @CrossOrigin(origins = ["*"])
    fun allBoxes(): ResponseEntity<List<BoxDtoJson>> {
        return ResponseEntity.ok(this.boxRepository.findAll().map { fromBoxToBoxDtoJson(it) })
    }

    @GetMapping("/api/boxes/{id}")
    fun getBoxById(@PathVariable("id") id: Long): ResponseEntity<Optional<BoxDtoJson>> {
        return ResponseEntity.ok(this.boxRepository.findById(id).map { fromBoxToBoxDtoJson(it) })
    }
}

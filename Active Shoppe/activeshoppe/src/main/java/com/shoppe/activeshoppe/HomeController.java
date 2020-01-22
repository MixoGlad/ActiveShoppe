package com.shoppe.activeshoppe;




import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin


public class HomeController(){
@GetMapping("/")
public String home(){

    return "/index.html"
}

}
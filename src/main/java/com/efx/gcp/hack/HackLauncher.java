package com.efx.gcp.hack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.efx.gcp.hack"})
public class HackLauncher {

    public static void main(String[] args) {
        SpringApplication.run(HackLauncher.class, args);
    }

}

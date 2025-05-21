//package com.springboot.SpringOpenAI.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestClient;
//
//import com.springboot.SpringOpenAI.dto.ChatGPTResponse;
//import com.springboot.SpringOpenAI.dto.ChatGPTRequest;
//import com.springboot.SpringOpenAI.dto.PromptRequest;
//
//@Service
//public class ChatGPTService {
//
//	private final RestClient restClient;
//	
//	@Autowired
//	public ChatGPTService(RestClient restClient){
//		this.restClient = restClient;
//	}
//	
//	@Value("${openapi.api.key}")
//	private String apikey;
//	
//	
//	@Value("${openapi.api.model}")
//	private String model;
//	
//	public String getChatResponse(PromptRequest promptRequest) {
//		
//		ChatGPTRequest chatGPTRequest = new ChatGPTRequest(
//				model, 
//				List.of(new ChatGPTRequest.Message("user", "Give answer without any text-styling" + promptRequest.prompt()))
//		);
//		
//		ChatGPTResponse response = restClient.post()
//				.header("Authorization", "Bearer " + apikey)
//				.header("Content-Type", "application/json")
//				.body(chatGPTRequest)
//				.retrieve()
//				.body(ChatGPTResponse.class);
//		return response.choices().get(0).message().content();
//	}
//}
//
//

package com.springboot.SpringOpenAI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.springboot.SpringOpenAI.dto.ChatGPTRequest;
import com.springboot.SpringOpenAI.dto.ChatGPTResponse;
import com.springboot.SpringOpenAI.dto.PromptRequest;

import io.github.cdimascio.dotenv.Dotenv;

@Service
public class ChatGPTService {

	private final RestClient restClient;
	private final String apiKey;  // Loaded from .env
	private final String model;

	@Autowired
	public ChatGPTService(RestClient restClient, 
						  @Value("${openapi.api.model}") String model) {
		this.restClient = restClient;
		this.model = model;

		// Load API key from .env
		Dotenv dotenv = Dotenv.load();
		this.apiKey = dotenv.get("OPENAI_API_KEY");

		if (this.apiKey == null) {
			throw new RuntimeException("OPENAI_API_KEY not found in .env");
		}
		
		System.out.println("Loaded OpenAI Key: " + apiKey);

	}

	public String getChatResponse(PromptRequest promptRequest) {
		ChatGPTRequest chatGPTRequest = new ChatGPTRequest(
				model, 
				List.of(new ChatGPTRequest.Message("user", "Give answer without any text-styling" + promptRequest.prompt()))
		);

		ChatGPTResponse response = restClient.post()
				.header("Authorization", "Bearer " + apiKey)
				.header("Content-Type", "application/json")
				.body(chatGPTRequest)
				.retrieve()
				.body(ChatGPTResponse.class);

		return response.choices().get(0).message().content();
	}
}


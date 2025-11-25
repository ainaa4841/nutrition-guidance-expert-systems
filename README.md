NutriGuidEX (Nutrition Guidance Expert System)
1.0 INTRODUCTION / PROJECT OVERVIEW

NutriGuidEX is a nutrition guidance expert system designed to support individuals in understanding their nutritional needs by generating personalized recommendations based on user-provided information. This project was developed using HTML, CSS, and JavaScript, where the system acts as an intelligent advisor capable of analyzing user data such as age, gender, weight, height, activity level, and health symptoms.
The primary goal is to assist users in making informed dietary decisions while identifying possible nutrient deficiencies and potential nutrition-related illnesses through a rule-based expert system approach.

1.1 OBJECTIVE

To analyze user input such as age, gender, height, weight, exercise frequency, and symptoms using expert system logic.

To generate personalized nutritional recommendations including calories, carbohydrates, and protein intake.

To identify possible illnesses and vitamin deficiencies based on the symptoms provided by the user.

To provide an accessible and user-friendly expert system developed entirely on front-end technologies.

1.2 SCOPE

The system is designed to support users of various age groups by collecting basic personal details and health-related symptoms. It evaluates the data through predefined rules and provides recommendations involving BMI, calorie intake, nutrient requirements, possible illnesses, and vitamin deficiencies.

2.0 SYSTEM DESCRIPTION

NutriGuidEX operates using a forward chaining inference method, where the system begins with user-submitted facts and matches them against a set of rules stored within the knowledge base.
The system includes:

Input Section
The user enters age, gender, height, weight, activity level, and symptoms.

Processing / Inference Engine
The JavaScript logic determines BMI, body status, calorie needs, macronutrient amounts, and identifies deficiencies.

Output Section
The result page displays BMI category, daily nutritional recommendations, and potential deficiencies or illnesses.

3.0 METHODOLOGY
3.1 Knowledge Acquisition

Knowledge was collected through research on nutrition, dietary needs, symptom-based illness identification, and vitamin deficiency references. These findings were transformed into structured facts and rules.

3.2 Knowledge Representation

The system uses rule-based representation, where user facts trigger specific conditions within the rule base.

3.3 Inference Technique

A Forward Chaining technique is used to derive conclusions based on the provided facts, progressing rule by rule until all possible outputs are generated.

4.0 SYSTEM OUTPUT

The system provides the following:

BMI value and body status

Daily calorie requirement

Recommended carbohydrate and protein intake

Possible vitamin deficiencies

Possible illnesses derived from symptoms

Suggested vitamin consumption based on age category

5.0 TECHNOLOGIES USED

HTML – Interface and structure

CSS – Page styling and layout

JavaScript – Expert system logic, rule execution, calculations

6.0 HOW TO RUN

Download or clone the repository.

Open the project folder.

Run the system by opening index.html in any modern browser.
No installation or backend is required.

7.0 FUTURE ENHANCEMENTS

Adding more illness and deficiency categories

Improving UI and making it fully mobile-responsive

Expanding multilingual support

Integrating API-based nutritional databases for more accurate recommendations

8.0 CONCLUSION

NutriGuidEX demonstrates how expert system concepts can be applied to provide personalized nutrition advice. By combining structured rules with a forward chaining approach, the system is capable of evaluating health-related factors and giving meaningful dietary recommendations. Developed entirely using front-end technologies, NutriGuidEX offers an accessible platform for users seeking basic dietary guidance and health awareness.

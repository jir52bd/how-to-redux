
 <p align="center">
    <h3 align="center">Understanding Reducer Function</h3>
</p>

<br />


``` Redux ``` এর ``` reducer() ``` ফাংশন হল সবচেয়ে গুরুত্বপূর্ণ এখানে আপনার  এপ্লিকেশনের  সব বিজনেস লজিক গুলো থাকে।  কিভাবে ``` state ``` পরিবর্তন করতে হবে সে বিষয়গুলো এবং লজিক গুলো এখানে আছে।

``` Reducer ``` ফাংশন  প্যারামিটার হিসেবে কারেন্ট ``` state ``` এবং ``` action ``` টা নিবে এবং আউটপুট হিসেবে একটা নতুন ``` state ``` দিবে। অন্য ভাবে বলা যায় - 
    ``` 
       (state, action ) => newState 
    ```

``` Reducer function ``` এর কিছু বৈশিষ্ট্য আছে - 
1. ``` pure function ```
2. ``` immutability ```


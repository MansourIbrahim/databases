Q1. What columns violate 1NF?

   member_address (domain changed, )
   dinner_date (domain changed, )
   food_code (multiple values, )
   food_description (multiple values, )

Q2. What entities do you recognize that could be extracted?

   1. member
   2. food
   3. dinner
   4. venue


Q3. Name all the tables and columns that would make a 3NF compliant solution.

1. members table with columns(member_id PK, member_name, member_address) 
2. food table with columns(food_code PK, food_description)
3. dinner, venue table with columns(dinner_id PK, venue_code, venue_description)
4. order table with columns(member_id, dinner_id, food_code)

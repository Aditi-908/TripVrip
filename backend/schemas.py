from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# ------------------------
# Input schema for registering a new user
# ------------------------
class UserCreate(BaseModel):
    email: EmailStr
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "user@example.com",
                "password": "strongpassword123"
            }
        }

# ------------------------
# Input schema for login
# ------------------------
class UserLogin(BaseModel):
    email: EmailStr
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "user@example.com",
                "password": "strongpassword123"
            }
        }

# ------------------------
# Output schema for user data (response)
# ------------------------
class UserResponse(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime

    class Config:
        orm_mode = True

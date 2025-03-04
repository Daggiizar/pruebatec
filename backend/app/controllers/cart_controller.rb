class CartController < ApplicationController
    @@cart = []

    def index
        render json: @@cart
    end

    def add
        product = params.permit(:id, :name, :price)
        @@cart << product
        render json: { message: "Producto agregado", cart: @@cart }
    end
end
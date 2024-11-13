from django.db import models
from apps.product.models import Product
from apps.order.models import Order

class OrderItem(models.Model):
    order_item_id = models.IntegerField(primary_key=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    class Meta:
        db_table = "order_items"
        
    def __str__(self):
        return f"OrderItems {self.order_item_id} - {self.quantity} of {self.product.name} for Order {self.order.order_id}"
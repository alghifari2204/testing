/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favResto) => {
  it('should return the restaurant that has been added', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });

    expect(await favResto.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favResto.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favResto.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favResto.putRestaurant({ aProperty: 'property' });

    expect(await favResto.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });

    expect(await favResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });
    favResto.putRestaurant({ id: 3 });

    await favResto.deleteRestaurant(1);

    expect(await favResto.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the Restaurant has not been added', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });
    favResto.putRestaurant({ id: 3 });

    await favResto.deleteRestaurant(4);

    expect(await favResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };

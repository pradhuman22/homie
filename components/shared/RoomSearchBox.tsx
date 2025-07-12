'use client';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { CalendarIcon, MapPinIcon, SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { availabilityOptions } from '@/constant';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const googleMapsLibraries: ('places' | 'drawing' | 'geometry' | 'visualization')[] = ['places'];

const formSchema = z.object({
  location: z.string().min(1, { message: 'Location is required' }),
  availability: z.string().min(1, { message: 'Availability is required' }),
});

type FormValues = z.infer<typeof formSchema>;

const RoomSearchBox = () => {
  const router = useRouter();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!,
    libraries: googleMapsLibraries,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      availability: '',
    },
    mode: 'onBlur',
  });

  const [autoCompleteInstance, setAutocompleteInstance] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onLoadAutoComplete = useCallback((autoC: google.maps.places.Autocomplete) => {
    setAutocompleteInstance(autoC);
  }, []);

  const onPlacesChanged = useCallback(() => {
    if (autoCompleteInstance) {
      const place = autoCompleteInstance.getPlace();
      if (!place.geometry || !place.geometry.location) {
        form.setError('location', {
          type: 'manual',
          message: 'Please select a valid location from the suggestions.',
        });
        return;
      }
      let formattedLocation = '';
      let city = '';
      let state = '';
      if (place.address_components) {
        for (const component of place.address_components) {
          if (component.types.includes('locality')) {
            city = component.long_name;
          }
          if (component.types.includes('administrative_area_level_1')) {
            state = component.long_name;
          }
        }
      }
      if (state && city) {
        formattedLocation = `${state}, ${city}`;
      } else if (state) {
        formattedLocation = state;
      } else if (city) {
        formattedLocation = city;
      } else if (place.formatted_address) {
        formattedLocation = place.formatted_address;
      } else if (place.name) {
        formattedLocation = place.name;
      }
      form.setValue('location', formattedLocation, { shouldValidate: true });
      form.clearErrors('location');
    } else {
      console.warn('Google Autocomplete instance not loaded yet.');
    }
  }, [autoCompleteInstance, form]);

  const onSubmit = useCallback(
    (values: FormValues) => {
      // Encode values for URL safety
      const queryParams = new URLSearchParams();
      queryParams.append('location', values.location);
      queryParams.append('availability', values.availability);

      router.push(`/rooms?${queryParams.toString()}`);
    },
    [router],
  );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="relative w-full lg:flex-2/5">
                <FormLabel className="sr-only">Location</FormLabel>
                <MapPinIcon className="text-muted-foreground absolute top-3.5 left-3 z-10 h-5 w-5" />
                <FormControl>
                  {isLoaded ? (
                    <Autocomplete
                      onLoad={onLoadAutoComplete}
                      onPlaceChanged={onPlacesChanged}
                      options={{
                        fields: [
                          'address_components',
                          'geometry',
                          'name',
                          'formatted_address',
                          'place_id',
                        ],
                        types: ['(regions)'],
                        componentRestrictions: { country: 'JP' },
                      }}
                    >
                      <Input
                        type="text"
                        className="bg-muted focus:bg-background w-full py-6 pl-10"
                        {...field}
                        placeholder="Search (e.g., Tokyo, Shinjuku)"
                        autoComplete="off"
                      />
                    </Autocomplete>
                  ) : (
                    <Input
                      type="text"
                      className="bg-muted focus:bg-background w-full py-6 pl-10"
                      {...field}
                      placeholder="Loading Maps..."
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem className="relative w-full lg:flex-2/5">
                <FormLabel className="sr-only">Availability</FormLabel>
                <CalendarIcon className="text-muted-foreground absolute top-3.5 left-3 z-10 h-5 w-5" />
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-muted focus:bg-background w-full py-6 pl-10">
                      <SelectValue placeholder="Check availability" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availabilityOptions.map(({ label, value }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="h-12 w-full cursor-pointer text-base" variant={'default'} size={'lg'}>
          <SearchIcon /> Search Rooms
        </Button>
      </form>
    </Form>
  );
};

export default RoomSearchBox;

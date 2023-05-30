import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AddImageButton } from '@components/AddImagesButton'
import { Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack, useTheme } from 'native-base'

import { Feather } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FileSystemProps = FileSystem.FileInfo & {
    size: number
}

type ImagesProps = {
    name: string
    uri: string
    type: string
}

export function CreateAds() {
    const [images, setImages] = useState<ImagesProps[]>([])
    const user = { name: 'teste' }

    const { colors } = useTheme()

    async function handleAddImage() {
        try {
            if (images.length === 3) {
                return console.log('somente 3')
            }

            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            })

            if (photoSelected.canceled) return

            if (!photoSelected.assets[0].uri) return

            const photoInfo: FileSystemProps = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileSystemProps

            if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                console.log('Imagem muito grande')
            }

            const fileExtension = photoSelected.assets[0].uri.split('.').pop()

            const photoFile = {
                name: `${user.name}.${fileExtension}`.toLowerCase(),
                uri: photoSelected.assets[0].uri,
                type: `${photoSelected.assets[0].type}/${fileExtension}`
            } as any

            setImages(state => [...state, photoFile])

        } catch (error) {
            console.log(error)
        }
    }

    function handleRemoveImage(uri: string) {
        const imagesWithoutImageRemoved = images.filter(image => image.uri !== uri)

        setImages(imagesWithoutImageRemoved)
    }

    return (
        <>
            <ScrollView flex={1} mb={23} pb bgColor='gray.600'>
                <VStack mx={8}>
                    <Heading
                        fontFamily='heading'
                        fontSize='md'
                        mt={6}
                        color='gray.200'
                    >
                        Imagens
                    </Heading>
                    <Text mt={1} mb={4} color='gray.300'>
                        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
                    </Text>

                </VStack>
                <HStack>

                    <ScrollView pl={8} horizontal showsHorizontalScrollIndicator={false} >
                        {
                            images.length > 0 && images.map(image => (
                                <Box w={100} mr={4}>
                                    <TouchableOpacity
                                        onPress={() => handleRemoveImage(image.uri)}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: colors.gray[200],
                                            height: 16,
                                            width: 16,
                                            borderRadius: 8,
                                            top: 4,
                                            right: 4,
                                            zIndex: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon
                                            as={Feather}
                                            name='x'
                                            position='absolute'
                                            size={3}
                                            color='gray.700'
                                        />
                                    </TouchableOpacity>
                                    <Image
                                        key={image.name}
                                        source={{ uri: image.uri }}
                                        alt={image.name}
                                        minH={100}
                                        resizeMode='cover'
                                        rounded='md'
                                    />
                                </Box>
                            ))
                        }

                        <AddImageButton
                            onPress={handleAddImage}
                        />
                    </ScrollView>
                </HStack>

                <VStack mx={8}>
                    <Heading
                        fontFamily='heading'
                        fontSize='md'
                        mt={6}
                        color='gray.200'
                    >
                        Sobre o Produto
                    </Heading>

                    <VStack mt={4}>
                        <Input
                            placeholder='Título do anúncio'
                        />

                        <Input
                            placeholder='Título do anúncio'
                            multiline
                            numberOfLines={10}
                            h={160}
                            textAlignVertical='top'
                        />

<Input
                            placeholder='Título do anúncio'
                            multiline
                            numberOfLines={10}
                            h={160}
                            textAlignVertical='top'
                        />

<Input
                            placeholder='Título do anúncio'
                            multiline
                            numberOfLines={10}
                            h={160}
                            textAlignVertical='top'
                        />

<Input
                            placeholder='Título do anúncio'
                            multiline
                            numberOfLines={10}
                            h={160}
                            textAlignVertical='top'
                        />

<Input
                            placeholder='Título do anúncio'
                            multiline
                            numberOfLines={10}
                            h={160}
                            textAlignVertical='top'
                        />
                    </VStack>
                </VStack>
            </ScrollView>
            <Box
                justifyContent='center'
                position='absolute'
                bottom={0}
                bgColor='gray.700'
                h={23}
                w='full'
                px={6}
            >
                <HStack justifyContent='center' mx={4} style={{gap: 8}} alignItems='center'>
                    <Button color='gray' w='50%' title='Cancelar' />
                    <Button color='black' w='50%' title='Avançar' />
                </HStack>
            </Box>
        </>
    )
}